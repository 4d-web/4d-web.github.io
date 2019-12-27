/* форма обратной связи */
function feedback(form, nocapt) {
	// var error = check_form(form, nocapt);

	var form_data = new FormData(form[0]);

	// if(!error) {
		jQuery.ajax({
			url: "/engine/ajax/feedback_custom.php",  
			type: "POST",
			cache: false,
     	 	contentType: false,
      		processData: false,
			data: form_data,
			dataType: "html"
		}).done(function(msg) {
			var dataModal = jQuery.parseJSON(msg);

			if(dataModal.captchaFlag) {
				reset_captcha(form.find(".invisibleCaptcha").attr("data-captcha"));
			}
			if(!dataModal.error_mail) {
				clean_form(form);
				closeModal(form.closest('.styleModalFix').attr('id'));
				form_msg(dataModal.html, 'oki');
			}
			else {
				form_msg(dataModal.html, 'error');
			}
			if(form[0].formId.value == 1) dataLayer.push({'event': 'call_send'});
			else if(form[0].formId.value == 3) dataLayer.push({'event': 'questionnaire'});
			else if(form[0].formId.value == 4) dataLayer.push({'event': 'consultation_send'});
			else if(form[0].formId.value == 5) dataLayer.push({'event': 'help_send'});
			else if(form[0].formId.value == 6) dataLayer.push({'event': 'checkout'});

			

			jQuery(form.find('.styleModalFix')).each(function(){
				closeModal(jQuery(this).attr('id'));
			});
		}).fail(function(jqXHR, textStatus) {
			form_msg("Ошибка AJAX: " + textStatus, 'error');
		});
		// } else {
		// 	form_msg(error, 'error');
		// }
}

function clean_form(form) { 
	jQuery(form)[0].reset();
}

function reset_captcha(id) {
	grecaptcha.reset(id);		
} 

function check_form(form, nocapt) {
	var error = "";
	// var capt = form.find('.captcha').attr('id');
	form.find('.required').each(function(){
		
		jQuery(this).removeClass('error');
		if(!jQuery(this).prop('disabled') && jQuery.trim(jQuery(this).val()) == "" && jQuery(this).css('display') != "none") {
			jQuery(this).addClass('error'); 
			error += "<li>"+jQuery(this).attr('data-error')+"</li>";
		}
	});
	// if(capt && !nocapt && (typeof grecaptcha == "undefined" || !grecaptcha.getResponse(cap_response[capt]))) {
	// 	error += '<li>Пожалуйста подтвердите, что Вы не робот</li>';
	// 	jQuery('#'+capt).addClass('error');
	// } else jQuery('#'+capt).removeClass('error');
	if(error) error = "<ul>"+error+"</ul>";
	return error;
}

function form_msg(msg, type) {
	jQuery("#messages .styleModalBody").removeClass('error warn oki').addClass(type).html( msg );
	openModal('messages');
}


jQuery(document).on("click", '.js-captcha-show', function(e) {
	e.preventDefault();
	var form = jQuery(this).closest('form'),
		error = check_form(form, 'true'),
		capt_modal = form.find('.styleModalFix').attr('id');
	if(!error) {
		openModal(capt_modal);
	} else {
		form_msg(error, 'error');
	}
});

function submit_callback() {
	feedback(jQuery('.captcha-modal:visible').closest('form'));
}

$(document).ready(function(){
	$("input[name='url_feedback']").val(location.href);
});


