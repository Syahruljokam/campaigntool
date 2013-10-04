<?php /* Smarty version 2.6.27, created on 2013-10-04 13:19:21
         compiled from CRM/Activity/Calendar/ICal.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'crmICalText', 'CRM/Activity/Calendar/ICal.tpl', 33, false),array('modifier', 'date_format', 'CRM/Activity/Calendar/ICal.tpl', 35, false),array('modifier', 'crmICalDate', 'CRM/Activity/Calendar/ICal.tpl', 35, false),)), $this); ?>
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CiviCRM//NONSGML CiviCRM iCal//EN
X-WR-TIMEZONE:<?php echo $this->_tpl_vars['timezone']; ?>

METHOD:REQUEST
BEGIN:VEVENT
UID:CIVICRMACTIVITY<?php echo $this->_tpl_vars['activity']->id; ?>

SUMMARY:<?php echo ((is_array($_tmp=$this->_tpl_vars['activity']->subject)) ? $this->_run_mod_handler('crmICalText', true, $_tmp) : smarty_modifier_crmICalText($_tmp)); ?>

CALSCALE:GREGORIAN
DTSTAMP;VALUE=DATE-TIME:<?php echo ((is_array($_tmp=((is_array($_tmp=time())) ? $this->_run_mod_handler('date_format', true, $_tmp, '%Y-%m-%d %H:%M:%S') : smarty_modifier_date_format($_tmp, '%Y-%m-%d %H:%M:%S')))) ? $this->_run_mod_handler('crmICalDate', true, $_tmp) : smarty_modifier_crmICalDate($_tmp)); ?>

DTSTART;VALUE=DATE-TIME:<?php echo ((is_array($_tmp=$this->_tpl_vars['activity']->activity_date_time)) ? $this->_run_mod_handler('crmICalDate', true, $_tmp) : smarty_modifier_crmICalDate($_tmp)); ?>

DTEND;VALUE=DATE-TIME:<?php echo ((is_array($_tmp=$this->_tpl_vars['activity']->activity_date_time)) ? $this->_run_mod_handler('crmICalDate', true, $_tmp) : smarty_modifier_crmICalDate($_tmp)); ?>

<?php if ($this->_tpl_vars['activity']->location): ?>
LOCATION:<?php echo ((is_array($_tmp=$this->_tpl_vars['activity']->location)) ? $this->_run_mod_handler('crmICalText', true, $_tmp) : smarty_modifier_crmICalText($_tmp)); ?>

<?php endif; ?>
<?php if ($this->_tpl_vars['organizer']): ?>
ORGANIZER:MAILTO:<?php echo ((is_array($_tmp=$this->_tpl_vars['organizer'])) ? $this->_run_mod_handler('crmICalText', true, $_tmp) : smarty_modifier_crmICalText($_tmp)); ?>

<?php endif; ?>
<?php $_from = $this->_tpl_vars['contacts']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['contact']):
?>
ATTENDEE;CN="<?php echo ((is_array($_tmp=$this->_tpl_vars['contact']['display_name'])) ? $this->_run_mod_handler('crmICalText', true, $_tmp) : smarty_modifier_crmICalText($_tmp)); ?>
":MAILTO:<?php echo ((is_array($_tmp=$this->_tpl_vars['contact']['email'])) ? $this->_run_mod_handler('crmICalText', true, $_tmp) : smarty_modifier_crmICalText($_tmp)); ?>

<?php endforeach; endif; unset($_from); ?>
END:VEVENT
END:VCALENDAR