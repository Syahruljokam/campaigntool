<?php /* Smarty version 2.6.27, created on 2013-10-03 07:27:04
         compiled from CRM/common/ReCAPTCHA.tpl */ ?>
<?php if ($this->_tpl_vars['recaptchaHTML']): ?>
<?php echo '
<script type="text/javascript">
var RecaptchaOptions = {'; ?>
<?php echo $this->_tpl_vars['recaptchaOptions']; ?>
<?php echo '};
</script>
'; ?>

<div class="crm-section recaptcha-section">
    <table class="form-layout-compressed">
        <tr>
          <td class="recaptcha_label">&nbsp;</td>
          <td><?php echo $this->_tpl_vars['recaptchaHTML']; ?>
</td>
       </tr>
    </table>
</div>
<?php endif; ?>