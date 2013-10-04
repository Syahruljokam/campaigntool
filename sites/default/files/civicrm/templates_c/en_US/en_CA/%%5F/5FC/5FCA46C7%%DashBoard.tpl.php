<?php /* Smarty version 2.6.27, created on 2013-10-03 04:04:48
         compiled from CRM/Campaign/Page/DashBoard.tpl */ ?>

<?php if ($this->_tpl_vars['subPageType'] == 'campaign'): ?>

    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Campaign/Form/Search/Campaign.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<?php elseif ($this->_tpl_vars['subPageType'] == 'survey'): ?>

    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Campaign/Form/Search/Survey.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<?php elseif ($this->_tpl_vars['subPageType'] == 'petition'): ?>

    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Campaign/Form/Search/Petition.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<?php else: ?>

      <div class="crm-block crm-content-block crm-campaign-page">

   <div id="mainTabContainer" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
     <ul class="crm-campaign-tabs-list">
       <?php $_from = $this->_tpl_vars['allTabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tabName'] => $this->_tpl_vars['tabValue']):
?>
         <li id="tab_<?php echo $this->_tpl_vars['tabValue']['id']; ?>
" class="crm-tab-button ui-corner-bottom">
            <a href="<?php echo $this->_tpl_vars['tabValue']['url']; ?>
" title="<?php echo $this->_tpl_vars['tabValue']['title']; ?>
"><span></span><?php echo $this->_tpl_vars['tabValue']['title']; ?>
</a>
         </li>
       <?php endforeach; endif; unset($_from); ?>
     </ul>
  </div>


<?php echo '
<script type="text/javascript">

//explicitly stop spinner
function stopSpinner( ) {
  cj(\'li.crm-tab-button\').each(function(){ cj(this).find(\'span\').text(\' \');})
}

cj(document).ready( function( ) {
     '; ?>

     var spinnerImage = '<img src="<?php echo $this->_tpl_vars['config']->resourceBase; ?>
i/loading.gif" style="width:10px;height:10px"/>';
     <?php echo '

     var selectedTabIndex = '; ?>
<?php echo $this->_tpl_vars['selectedTabIndex']; ?>
<?php echo ';
     cj("#mainTabContainer").tabs( {
                                    selected: selectedTabIndex,
                                    spinner: spinnerImage,
            cache: true,
            load: stopSpinner
            });
});

</script>
'; ?>

<div class="clear"></div>
</div> <?php endif; ?>



