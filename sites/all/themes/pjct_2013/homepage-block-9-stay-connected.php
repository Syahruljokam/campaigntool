<?php
global $language;	//$language->language holds the current language code (en, fr)
//drupal_set_message($language->language);

global $base_url;
$html = "";
civicrm_initialize();
$dao = CRM_Core_DAO::executeQuery("SELECT e.id, e.title, e.summary, e.description
FROM civicrm_event e INNER JOIN civicrm_uf_join j on e.id=j.entity_id and j.entity_table='civicrm_event' and j.is_active=TRUE AND e.is_public =1 AND e.is_active =1 INNER JOIN civicrm_uf_group g ON j.uf_group_id=g.id and g.is_active=TRUE INNER JOIN civicrm_uf_field f ON g.id=f.uf_group_id AND f.field_type='Formatting' WHERE e.start_date >= DATE(NOW()) GROUP BY f.uf_group_id HAVING count(f.uf_group_id)>=1");
$weight = variable_get('weight');


$hr = '<br class="clear" />';
  $row = array();
//$html .=  '<h2>Events</h2>';
while ($dao->fetch()) {
$w = isset($weight['event-'.$dao->id]) ? $weight['event-'.$dao->id] : '';
  $row[$w][] = l(t('» more'), "civicrm/event/info", array('query' => array('reset' => 1, 'id'=>$dao->id), 'attributes' => array('class' => array('styled','styledOrange','rightAligned'))) ) . '<h4>' . ts( $dao->title ) . '</h4>';
  //$row[$weight['event-'.$dao->id]][] = "<div>"  . "{$dao->summary}{$dao->description}</div>";
  $hr = '<br class="clear" />';
}

$dao = CRM_Core_DAO::executeQuery("SELECT s.id, f.help_pre as title, s.instructions FROM  civicrm_survey s INNER JOIN civicrm_uf_join j ON s.is_active =1 AND s.activity_type_id =32 AND s.id=j.entity_id AND j.entity_table='civicrm_survey' AND j.is_active=TRUE INNER JOIN civicrm_uf_group g ON j.uf_group_id=g.id and g.is_active=TRUE INNER JOIN civicrm_uf_field f ON g.id=f.uf_group_id AND f.field_type='Formatting' GROUP BY f.uf_group_id HAVING count(f.uf_group_id)>=1");

//$html .=  '<h2>Take Action</h2>';
while ($dao->fetch()) {
$w = isset($weight['petition-'.$dao->id]) ? $weight['petition-'.$dao->id] : '';
  $row[$w][] = l(t('» more'), "civicrm/petition/sign", array('query' => array('reset' => 1, 'sid'=>$dao->id), 'attributes' => array('class' => array('styled','styledOrange','rightAligned'))) )   . '<h4>' . ts( $dao->title ) . '</h4>';
  //$string = (strlen($dao->instructions) > 700) ? substr($dao->instructions, 0, 700). ' .... ' :  $dao->instructions;
  //$row[$weight['petition-'.$dao->id]][] = "<div>". $string . "</div>";
  //$hr = '<br class="clear" />';
}

$dao = CRM_Core_DAO::executeQuery('SELECT g.id, g.title, f.weight, f.field_type, f.help_pre 
FROM civicrm_uf_group g LEFT JOIN civicrm_uf_field f ON f.uf_group_id = g.id 
WHERE g.add_to_group_id IS NOT NULL AND g.is_active = 1 
AND f.field_type = "Formatting";');

//$html .= '<h2>Profile(?)</h2>';
while($dao->fetch()) {
	//print_r($dao);
    if ($dao->weight == 1) {
$w = isset($weight['profile-'.$dao->id]) ? $weight['profile-'.$dao->id] : '';
		$row[$w][] =  l(t('» more'), "civicrm/profile/create", array('query' => array('reset' => 1, 'gid'=>$dao->id), 'attributes' => array('class' => array('styled','styledOrange','rightAligned'))) ) . '<h4>' .  ts($dao->help_pre) .'</h4>';
    }
}

ksort($row);
foreach($row as $rows) {
 foreach($rows as $fields) {
   $values[] = $fields;
 }
}

$attributes = array(
      'id' => 'stayConnected'
    );
$html .= theme('item_list', array('items' => $values, 'attributes' => $attributes));

echo $html;

?>
<script type="text/javascript">
jQuery(document).ready( function(){

jQuery('#my-list li:first').find('hr').remove();
jQuery("#my-list li:even h3" ).css( "color", "#444" );
jQuery("#my-list li:odd" ).css( "background-color", "#efefef" );

});
</script>
