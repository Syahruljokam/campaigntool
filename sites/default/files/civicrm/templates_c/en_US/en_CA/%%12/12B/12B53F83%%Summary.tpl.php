<?php /* Smarty version 2.6.27, created on 2013-10-01 14:56:49
         compiled from CRM/Contact/Page/View/Summary.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'cat', 'CRM/Contact/Page/View/Summary.tpl', 46, false),array('function', 'crmURL', 'CRM/Contact/Page/View/Summary.tpl', 59, false),array('function', 'help', 'CRM/Contact/Page/View/Summary.tpl', 94, false),array('block', 'ts', 'CRM/Contact/Page/View/Summary.tpl', 59, false),)), $this); ?>
<?php if ($this->_tpl_vars['action'] == 2): ?>
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Form/Contact.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php else: ?>

  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/wysiwyg.tpl", 'smarty_include_vars' => array('includeWysiwygEditor' => true)));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/overlay.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

  <div class="crm-summary-contactname-block crm-inline-edit-container">
    <div class="crm-summary-block" id="contactname-block">
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/ContactName.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    </div>
  </div>

  <div class="crm-actions-ribbon">
      <ul id="actions">
          <?php $this->assign('urlParams', "reset=1"); ?>
          <?php if ($this->_tpl_vars['searchKey']): ?>
              <?php $this->assign('urlParams', ((is_array($_tmp=$this->_tpl_vars['urlParams'])) ? $this->_run_mod_handler('cat', true, $_tmp, "&key=".($this->_tpl_vars['searchKey'])) : smarty_modifier_cat($_tmp, "&key=".($this->_tpl_vars['searchKey'])))); ?>
              <?php endif; ?>
          <?php if ($this->_tpl_vars['context']): ?>
              <?php $this->assign('urlParams', ((is_array($_tmp=$this->_tpl_vars['urlParams'])) ? $this->_run_mod_handler('cat', true, $_tmp, "&context=".($this->_tpl_vars['context'])) : smarty_modifier_cat($_tmp, "&context=".($this->_tpl_vars['context'])))); ?>
          <?php endif; ?>

                  <?php if ($this->_tpl_vars['permission'] == 'edit' && ! $this->_tpl_vars['isDeleted']): ?>
              <li class="crm-contact-activity crm-summary-block">
                  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Actions.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
              </li>
              <li>
                  <?php $this->assign('editParams', ((is_array($_tmp=$this->_tpl_vars['urlParams'])) ? $this->_run_mod_handler('cat', true, $_tmp, "&action=update&cid=".($this->_tpl_vars['contactId'])) : smarty_modifier_cat($_tmp, "&action=update&cid=".($this->_tpl_vars['contactId'])))); ?>
                  <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/add','q' => $this->_tpl_vars['editParams']), $this);?>
" class="edit button" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                  <span><div class="icon edit-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
                  </a>
              </li>
          <?php endif; ?>

                    <?php if (( call_user_func ( array ( 'CRM_Core_Permission' , 'check' ) , 'access deleted contacts' ) && $this->_tpl_vars['is_deleted'] )): ?>
              <li class="crm-contact-restore">
                  <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view/delete','q' => "reset=1&cid=".($this->_tpl_vars['contactId'])."&restore=1"), $this);?>
" class="delete button" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Restore<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                  <span><div class="icon restore-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Restore from Trash<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
                  </a>
              </li>

              <?php if (call_user_func ( array ( 'CRM_Core_Permission' , 'check' ) , 'delete contacts' )): ?>
                  <li class="crm-contact-permanently-delete">
                      <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view/delete','q' => "reset=1&delete=1&cid=".($this->_tpl_vars['contactId'])."&skip_undelete=1"), $this);?>
" class="delete button" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete Permanently<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                      <span><div class="icon delete-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete Permanently<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
                      </a>
                  </li>
              <?php endif; ?>

          <?php elseif (call_user_func ( array ( 'CRM_Core_Permission' , 'check' ) , 'delete contacts' )): ?>
              <?php $this->assign('deleteParams', "&reset=1&delete=1&cid=".($this->_tpl_vars['contactId'])); ?>
              <li class="crm-delete-action crm-contact-delete">
                  <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view/delete','q' => $this->_tpl_vars['deleteParams']), $this);?>
" class="delete button" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                  <span><div class="icon delete-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete Contact<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
                  </a>
              </li>
          <?php endif; ?>

                    <?php if ($this->_tpl_vars['nextPrevError']): ?>
             <li class="crm-next-action">
               <?php echo smarty_function_help(array('id' => "id-next-prev-buttons"), $this);?>
&nbsp;
             </li>
          <?php else: ?>
            <?php if ($this->_tpl_vars['nextContactID']): ?>
             <?php $this->assign('viewParams', ((is_array($_tmp=$this->_tpl_vars['urlParams'])) ? $this->_run_mod_handler('cat', true, $_tmp, "&cid=".($this->_tpl_vars['nextContactID'])) : smarty_modifier_cat($_tmp, "&cid=".($this->_tpl_vars['nextContactID'])))); ?>
             <li class="crm-next-action">
               <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view','q' => $this->_tpl_vars['viewParams']), $this);?>
" class="view button" title="<?php echo $this->_tpl_vars['nextContactName']; ?>
">
               <span title="<?php echo $this->_tpl_vars['nextContactName']; ?>
"><div class="icon next-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Next<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
               </a>
             </li>
            <?php endif; ?>
            <?php if ($this->_tpl_vars['prevContactID']): ?>
             <?php $this->assign('viewParams', ((is_array($_tmp=$this->_tpl_vars['urlParams'])) ? $this->_run_mod_handler('cat', true, $_tmp, "&cid=".($this->_tpl_vars['prevContactID'])) : smarty_modifier_cat($_tmp, "&cid=".($this->_tpl_vars['prevContactID'])))); ?>
             <li class="crm-previous-action">
               <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view','q' => $this->_tpl_vars['viewParams']), $this);?>
" class="view button" title="<?php echo $this->_tpl_vars['prevContactName']; ?>
">
               <span title="<?php echo $this->_tpl_vars['prevContactName']; ?>
"><div class="icon previous-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Previous<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
               </a>
             </li>
            <?php endif; ?>
          <?php endif; ?>


          <?php if (! empty ( $this->_tpl_vars['groupOrganizationUrl'] )): ?>
          <li class="crm-contact-associated-groups">
              <a href="<?php echo $this->_tpl_vars['groupOrganizationUrl']; ?>
" class="associated-groups button" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Associated Multi-Org Group<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
              <span><div class="icon associated-groups-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Associated Multi-Org Group<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
              </a>
          </li>
          <?php endif; ?>
      </ul>
      <div class="clear"></div>
  </div><!-- .crm-actions-ribbon -->

  <div class="crm-block crm-content-block crm-contact-page crm-inline-edit-container">
      <div id="mainTabContainer" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
          <ul class="crm-contact-tabs-list">
              <li id="tab_summary" class="crm-tab-button">
                <a href="#contact-summary" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Summary<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                <span> </span> <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Summary<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
                <em>&nbsp;</em>
                </a>
              </li>
              <?php $_from = $this->_tpl_vars['allTabs']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tabName'] => $this->_tpl_vars['tabValue']):
?>
              <li id="tab_<?php echo $this->_tpl_vars['tabValue']['id']; ?>
" class="crm-tab-button crm-count-<?php echo $this->_tpl_vars['tabValue']['count']; ?>
">
                <a href="<?php echo $this->_tpl_vars['tabValue']['url']; ?>
" title="<?php echo $this->_tpl_vars['tabValue']['title']; ?>
">
                  <span> </span> <?php echo $this->_tpl_vars['tabValue']['title']; ?>

                  <em><?php echo $this->_tpl_vars['tabValue']['count']; ?>
</em>
                </a>
              </li>
              <?php endforeach; endif; unset($_from); ?>
          </ul>

          <div id="contact-summary" class="ui-tabs-panel ui-widget-content ui-corner-bottom">
              <?php if (( isset ( $this->_tpl_vars['hookContentPlacement'] ) && ( $this->_tpl_vars['hookContentPlacement'] != 3 ) ) || empty ( $this->_tpl_vars['hookContentPlacement'] )): ?>

                  <?php if (! empty ( $this->_tpl_vars['hookContent'] ) && isset ( $this->_tpl_vars['hookContentPlacement'] ) && $this->_tpl_vars['hookContentPlacement'] == 2): ?>
                      <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/SummaryHook.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                  <?php endif; ?>

                  <div class="contactTopBar contact_panel">
                    <div class="contactCardLeft">
                      <div class="crm-summary-contactinfo-block">
                        <div class="crm-summary-block" id="contactinfo-block">
                        <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/ContactInfo.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                        </div>
                      </div>
                    </div> <!-- end of left side -->
                    <div class="contactCardRight">
                      <?php if (! empty ( $this->_tpl_vars['imageURL'] )): ?>
                      <div id="crm-contact-thumbnail">
                        <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/ContactImage.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                      </div>
                      <?php endif; ?>
                      <div class="<?php if (! empty ( $this->_tpl_vars['imageURL'] )): ?> float-left<?php endif; ?>">
                        <div class="crm-clear crm-summary-block">
                          <div class="crm-summary-row">
                            <div class="crm-label" id="tagLink">
                              <a href="<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view','q' => "reset=1&cid=".($this->_tpl_vars['contactId'])."&selectedChild=tag"), $this);?>
" title="<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit Tags<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Tags<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
                            </div>
                            <div class="crm-content" id="tags"><?php echo $this->_tpl_vars['contactTag']; ?>
</div>
                          </div>
                          <div class="crm-summary-row">
                            <div class="crm-label"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Contact Type<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></div>
                            <div class="crm-content crm-contact_type_label">
                              <?php if (isset ( $this->_tpl_vars['contact_type_label'] )): ?><?php echo $this->_tpl_vars['contact_type_label']; ?>
<?php endif; ?>
                            </div>
                          </div>

                          <div class="crm-summary-row">
                            <div class="crm-label">
                              <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>CiviCRM ID<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php if (! empty ( $this->_tpl_vars['userRecordUrl'] )): ?> / <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>User ID<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php endif; ?>
                            </div>
                            <div class="crm-content">
                              <span class="crm-contact-contact_id"><?php echo $this->_tpl_vars['contactId']; ?>
</span>
                              <?php if (! empty ( $this->_tpl_vars['userRecordUrl'] )): ?>
                              <span class="crm-contact-user_record_id">
                                &nbsp;/&nbsp;<a title="View user record" class="user-record-link" href="<?php echo $this->_tpl_vars['userRecordUrl']; ?>
"><?php echo $this->_tpl_vars['userRecordId']; ?>
</a>
                              </span>
                              <?php endif; ?>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div> <!-- end of right side -->
                  </div>
                  <div class="contact_details">
                      <div class="contact_panel">
                        <div class="contactCardLeft">
                         <div >
                          <?php if ($this->_tpl_vars['showEmail']): ?>
                          <div class="crm-summary-email-block crm-summary-block" id="email-block">
                              <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Email.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                          </div>
                          <?php endif; ?>
                          <?php if ($this->_tpl_vars['showWebsite']): ?>
                          <div class="crm-summary-website-block crm-summary-block" id="website-block">
                              <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Website.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                          </div>
                          <?php endif; ?>
                         </div>
                        </div><!-- #contactCardLeft -->

                        <div class="contactCardRight">
                          <div >
                            <?php if ($this->_tpl_vars['showPhone']): ?>
                            <div class="crm-summary-phone-block crm-summary-block" id="phone-block">
                                <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Phone.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            </div>
                            <?php endif; ?>
                            <?php if ($this->_tpl_vars['showIM']): ?>
                            <div class="crm-summary-im-block crm-summary-block" id="im-block">
                                <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/IM.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            </div>
                            <?php endif; ?>
                            <?php if ($this->_tpl_vars['showOpenID']): ?>
                            <div class="crm-summary-openid-block crm-summary-block" id="openid-block">
                                <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/OpenID.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            </div>
                            <?php endif; ?>
                          </div>
                        </div><!-- #contactCardRight -->

                        <div class="clear"></div>
                      </div><!-- #contact_panel -->
                      <?php if ($this->_tpl_vars['showAddress']): ?>
                      <div class="contact_panel">
                        <?php $this->assign('locationIndex', 1); ?>
                        <?php if ($this->_tpl_vars['address']): ?>
                          <?php $_from = $this->_tpl_vars['address']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['locationIndex'] => $this->_tpl_vars['add']):
?>
                            <div class="<?php if ((1 & $this->_tpl_vars['locationIndex'])): ?>contactCardLeft<?php else: ?>contactCardRight<?php endif; ?> crm-address_<?php echo $this->_tpl_vars['locationIndex']; ?>
 crm-address-block crm-summary-block">
                              <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Address.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            </div>
                          <?php endforeach; endif; unset($_from); ?>
                          <?php $this->assign('locationIndex', $this->_tpl_vars['locationIndex']+1); ?>
                        <?php endif; ?>
                                                <?php if ($this->_tpl_vars['permission'] == 'edit'): ?>
                          <?php $this->assign('add', 0); ?>
                            <div class="<?php if ((1 & $this->_tpl_vars['locationIndex'])): ?>contactCardLeft<?php else: ?>contactCardRight<?php endif; ?> crm-address-block crm-summary-block">
                              <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Address.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            </div>
                      <?php endif; ?>

                    </div> <!-- end of contact panel -->
                    <?php endif; ?>
                    <div class="contact_panel">
                      <?php if ($this->_tpl_vars['showCommunicationPreferences']): ?>
                      <div class="contactCardLeft">
                        <div class="crm-summary-comm-pref-block">
                        <div class="crm-summary-block" id="communication-pref-block" >
                          <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/CommunicationPreferences.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?> 
                        </div>
                        </div>
                      </div> <!-- contactCardLeft -->
                      <?php endif; ?>
                      <?php if ($this->_tpl_vars['contact_type'] == 'Individual' && $this->_tpl_vars['showDemographics']): ?>
                        <div class="contactCardRight">
                          <div class="crm-summary-demographic-block">
                          <div class="crm-summary-block" id="demographic-block">
                            <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/Inline/Demographics.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?> 
                          </div>
                          </div>
                        </div> <!-- contactCardRight -->
                      <?php endif; ?>
                      <div class="clear"></div>
                      <div class="separator"></div>
                    </div> <!-- contact panel -->
                </div><!--contact_details-->
       
                <?php if ($this->_tpl_vars['showCustomData']): ?>
                  <div id="customFields">
                    <div class="contact_panel">
                      <div class="contactCardLeft">
                        <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/CustomDataView.tpl", 'smarty_include_vars' => array('side' => '1')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                      </div><!--contactCardLeft-->

                      <div class="contactCardRight">
                        <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/CustomDataView.tpl", 'smarty_include_vars' => array('side' => '0')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                      </div>

                      <div class="clear"></div>
                    </div>
                  </div>
                <?php endif; ?>         
       
                <?php if (! empty ( $this->_tpl_vars['hookContent'] ) && isset ( $this->_tpl_vars['hookContentPlacement'] ) && $this->_tpl_vars['hookContentPlacement'] == 1): ?>
                  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/SummaryHook.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                <?php endif; ?>
               <?php else: ?>
                  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/SummaryHook.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
               <?php endif; ?>
        </div>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </div><!-- /.crm-content-block -->

   <script type="text/javascript">
    <?php echo '
    cj(function($) {
      //explicitly stop spinner
      function stopSpinner( ) {
        $(\'li.crm-tab-button span\').text(\' \');
      }
      '; ?>

      var selectedTab = '<?php if (! empty ( $this->_tpl_vars['selectedChild'] )): ?><?php echo $this->_tpl_vars['selectedChild']; ?>
<?php else: ?>summary<?php endif; ?>';
      var tabIndex = $('#tab_' + selectedTab).prevAll().length;
      var spinnerImage = '<img src="<?php echo $this->_tpl_vars['config']->resourceBase; ?>
i/loading.gif" style="width:10px;height:10px"/>';
      <?php echo '
      $("#mainTabContainer").tabs({ selected: tabIndex, spinner: spinnerImage, cache: true, load: stopSpinner});
      $(".crm-tab-button").addClass("ui-corner-bottom");
      $().crmAccordions();

      $(\'body\').click(function() {
        cj(\'#crm-contact-actions-list\').hide();
      });
    });
    '; ?>

   </script>
<?php endif; ?>

<?php echo '
<script type="text/javascript">
cj(document).ready(function($) {
  $(\'.crm-inline-edit-container\').crmFormContactLock({
    ignoreLabel: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Ignore<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
    saveAnywayLabel: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Save Anyway<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
    reloadLabel: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Reload Page<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '"
  });
});
</script>
'; ?>


<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Form/validate.tpl", 'smarty_include_vars' => array('form' => 0)));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>