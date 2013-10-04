<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:20
         compiled from CRM/Contact/Form/CurrentEmployer.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'ts', 'CRM/Contact/Form/CurrentEmployer.tpl', 30, false),array('function', 'crmURL', 'CRM/Contact/Form/CurrentEmployer.tpl', 62, false),)), $this); ?>
<?php echo '
<script type="text/javascript">
  var dataUrl        = "'; ?>
<?php echo $this->_tpl_vars['employerDataURL']; ?>
<?php echo '";
  var newContactText = "'; ?>
(<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>new contact record<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>)<?php echo '";
  cj(\'#current_employer\').attr("title","Current employer auto complete");
  cj(\'#current_employer\').autocomplete( dataUrl, { 
    width        : 250, 
    selectFirst  : false,
    matchCase    : true, 
    matchContains: true
  }).result( function(event, data, formatted) {
    var foundContact   = ( parseInt( data[1] ) ) ? cj( "#current_employer_id" ).val( data[1] ) : cj( "#current_employer_id" ).val(\'\');
    if ( ! foundContact.val() ) {
      cj(\'div#employer_address\').html(newContactText).show();    
    } 
    else {
      cj(\'div#employer_address\').html(\'\').hide();    
    }
  }).bind(\'change blur\', function() {
    if ( !cj( "#current_employer_id" ).val( ) ) {
      cj(\'div#employer_address\').html(newContactText).show();    
    }
  });

  // remove current employer id when current employer removed.
  cj("form").submit(function() {
    if ( !cj(\'#current_employer\').val() ) cj( "#current_employer_id" ).val(\'\');
  });

  //current employer default setting
  '; ?>

  var cid        = "<?php echo $this->_tpl_vars['contactId']; ?>
";
  var employerId = "<?php echo $this->_tpl_vars['currentEmployer']; ?>
";
  <?php echo '
  if ( employerId ) {
    var dataUrl = "'; ?>
<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/rest','h' => 0,'q' => "className=CRM_Contact_Page_AJAX&fnName=getContactList&json=1&context=contact&org=1&id="), $this);?>
<?php echo '" + employerId + "&employee_id=" + cid ;
    
    cj.ajax({ 
      url     : dataUrl,   
      async   : false,
      success : function(html){
        //fixme for showing address in div
        htmlText = html.split( \'|\' , 2);
        cj(\'input#current_employer\').val(htmlText[0]);
        cj(\'input#current_employer_id\').val(htmlText[1]);
      }
    }); 
  }

  cj("input#current_employer").click( function( ) {
    cj("input#current_employer_id").val(\'\');
  });
</script>
'; ?>
