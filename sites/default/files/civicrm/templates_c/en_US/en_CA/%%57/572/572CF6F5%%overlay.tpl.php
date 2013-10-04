<?php /* Smarty version 2.6.27, created on 2013-10-01 14:56:49
         compiled from CRM/common/overlay.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'ts', 'CRM/common/overlay.tpl', 38, false),)), $this); ?>

<?php echo '
<script type="text/javascript">
/**
 * function to add overlay during ajax action
 */
function addCiviOverlay( element ) {
  var message = '; ?>
"<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Please wait...<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>"<?php echo '; 
  cj( element ).block({
    message: message,
    theme: true,
    draggable: false
  });
}

/**
 * function to remove overlay after ajax action
 */
function removeCiviOverlay( element ) {
  cj( element ).unblock();
}

</script>
'; ?>
