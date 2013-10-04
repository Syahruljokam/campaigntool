<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:21
         compiled from CRM/Contact/Form/ShareAddress.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'help', 'CRM/Contact/Form/ShareAddress.tpl', 29, false),array('function', 'crmURL', 'CRM/Contact/Form/ShareAddress.tpl', 99, false),array('block', 'ts', 'CRM/Contact/Form/ShareAddress.tpl', 36, false),)), $this); ?>
<tr>
  <td>
    <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['use_shared_address']['html']; ?>
<?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['use_shared_address']['label']; ?>
<?php echo smarty_function_help(array('id' => "id-sharedAddress",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>
<br />
    <?php if (! empty ( $this->_tpl_vars['sharedAddresses'][$this->_tpl_vars['blockId']]['shared_address_display'] )): ?>
      <span class="shared-address-display" id="shared-address-display-name-<?php echo $this->_tpl_vars['blockId']; ?>
">
        <?php echo $this->_tpl_vars['sharedAddresses'][$this->_tpl_vars['blockId']]['shared_address_display']['name']; ?>

      </span>

      <span class="shared-address-display" id="shared-address-display-<?php echo $this->_tpl_vars['blockId']; ?>
" onclick="cj(this).hide( );cj('#shared-address-display-name-<?php echo $this->_tpl_vars['blockId']; ?>
').hide( );cj('#shared-address-display-cancel-<?php echo $this->_tpl_vars['blockId']; ?>
').show( );cj('#shared-address-<?php echo $this->_tpl_vars['blockId']; ?>
').show( );">
              <?php echo $this->_tpl_vars['sharedAddresses'][$this->_tpl_vars['blockId']]['shared_address_display']['address']; ?>
 <a href='#' onclick='return false;'>( <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Change current shared address<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> )</a>
      </span>

      <span id="shared-address-display-cancel-<?php echo $this->_tpl_vars['blockId']; ?>
" class="hiddenElement" onclick="cj(this).hide( );cj('#shared-address-display-name-<?php echo $this->_tpl_vars['blockId']; ?>
').show( );cj('#shared-address-display-<?php echo $this->_tpl_vars['blockId']; ?>
').show( );cj('#shared-address-<?php echo $this->_tpl_vars['blockId']; ?>
').hide( );">
              <a href='#' onclick='return false;'>( <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Cancel<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> )</a>
      </span>
    <?php endif; ?>

    <table id="shared-address-<?php echo $this->_tpl_vars['blockId']; ?>
" class="form-layout-compressed hiddenElement">
      <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Form/NewContact.tpl", 'smarty_include_vars' => array('blockNo' => ($this->_tpl_vars['blockId']))));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    </table>
  </td>
</tr>


<?php echo '
<script type="text/javascript">
  function showHideSharedAddress( blockNo, showSelect ) {
    // based on checkbox, show or hide
    if ( cj( \'#address\\\\[\' + blockNo + \'\\\\]\\\\[use_shared_address\\\\]\' ).attr( \'checked\') ) {
      if ( showSelect && cj( \'#shared-address-display-\' + blockNo ).length == 0 ) {
        cj( \'#shared-address-\' + blockNo ).show( );
      }
      cj( \'table#address_table_\' + blockNo ).hide( );
      cj( \'#shared-address-display-\' + blockNo ).show( );
      cj( \'#shared-address-display-name-\' + blockNo ).show( );
      cj( \'#shared-address-display-cancel-\' + blockNo ).hide( );
      cj( \'.crm-address-custom-set-block-\' + blockNo).hide( );
    } else {
      cj( \'#shared-address-\' + blockNo ).hide( );
      cj( \'table#address_table_\' + blockNo ).show( );
      cj( \'#shared-address-display-\' + blockNo ).hide( );
      cj( \'#shared-address-display-name-\' + blockNo ).hide( );
      cj( \'#shared-address-display-cancel-\' + blockNo ).hide( );
      cj( \'.crm-address-custom-set-block-\' + blockNo).show( );
    }
  }

cj( function( ) {
    var blockNo = '; ?>
<?php echo $this->_tpl_vars['blockId']; ?>
<?php echo ';

    // call this when form loads
    showHideSharedAddress( blockNo, true );

    // handle check / uncheck of checkbox
    cj( \'#address\\\\[\' + blockNo + \'\\\\]\\\\[use_shared_address\\\\]\' ).click( function( ) {
      showHideSharedAddress( blockNo, true );
    });

    // start of code to add onchange event for hidden element
    var contactHiddenElement = \'input[name="contact_select_id[\' + blockNo +\']"]\';

    // store initial value
    var _default  = cj( contactHiddenElement ).val();

    // observe changes
    cj( contactHiddenElement ).change(function( ) {
      var sharedContactId = cj( this ).val( );
      if ( !sharedContactId || isNaN( sharedContactId ) ) {
        return;
      }

      var addressHTML = \'\';
      var postUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/inline','h' => 0), $this);?>
"<?php echo ';

      addCiviOverlay(\'div.crm-address_\' + blockNo);

      cj.post( postUrl, {
        \'contact_id\': sharedContactId,
        \'type\': \'method\',
        \'class_name\': \'CRM_Contact_Page_AJAX\',
        \'fn_name\': \'getAddressDisplay\'
        },
        function( response ) {
          if ( response ) {
            var selected = \'checked\';
            var addressExists = false;

            cj.each( response, function( i, val ) {
              if ( i > 1 ) {
                selected = \'\';
              } else {
                cj( \'input[name="address[\' + blockNo + \'][master_id]"]\' ).val( val.id );
              }

              addressHTML = addressHTML + \'<input type="radio" name="selected_shared_address-\'+ blockNo +\'" value=\' + val.id + \' \' + selected +\'>\' + val.display_text + \'<br/>\';

              addressExists = true;
            });

            if ( addressExists  ) {
              cj( \'#shared-address-\' + blockNo + \' .shared-address-list\' ).remove( );
              cj( \'#shared-address-\' + blockNo ).append( \'<tr class="shared-address-list"><td></td><td>\' + addressHTML + \'</td></tr>\');
              cj( \'input[name^=selected_shared_address-]\' ).click( function( ) {

              // get the block id
              var elemId = cj(this).attr( \'name\' ).split(\'-\');
              cj( \'input[name="address[\' + elemId[1] + \'][master_id]"]\' ).val( cj(this).val( ) );
              });
            } else {
              var helpText = '; ?>
"<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Selected contact does not have an address. Please edit that contact to add an address, or select a different contact.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>"<?php echo ';
              cj( \'#shared-address-\' + blockNo + \' .shared-address-list\' ).remove( );
              cj( \'#shared-address-\' + blockNo ).append( \'<tr class="shared-address-list"><td></td><td>\' + helpText + \'</td></tr>\');
            }

            removeCiviOverlay(\'div.crm-address_\' + blockNo);
          }
        },\'json\');
    });


    // continuous check for changed value
    setInterval(function( ) {
        if ( cj( contactHiddenElement ).val( ) != _default ) {
        // trigger native
        cj( contactHiddenElement ).change( );

        // update stored value
        _default = cj( contactHiddenElement ).val( );
        }

    }, 500);
    // end of code to add onchange event for hidden element
});
</script>
'; ?>


