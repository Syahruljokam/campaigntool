<?php /* Smarty version 2.6.27, created on 2013-09-30 17:25:41
         compiled from CRM/common/showHide.tpl */ ?>
 <script type="text/javascript">
    var showBlocks = new Array(<?php echo $this->_tpl_vars['showBlocks']; ?>
);
    var hideBlocks = new Array(<?php echo $this->_tpl_vars['hideBlocks']; ?>
);

    on_load_init_blocks( showBlocks, hideBlocks<?php if ($this->_tpl_vars['elemType'] == 'table-row'): ?>, 'table-row'<?php endif; ?> );
 </script>