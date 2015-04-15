var params = {
    login_phone_start:
    {
        "phone": "+79151214674"
    },
    login_phone_send:
    {
        "action_id": 21
    },
    login_phone_sms_code_check:
    {
        "phone": "+79151214674",
		"sms_code": "000"
    },
    login_access_token:
    {
        "access_token": "tokeeen"
    },
    payment_phone_start:
    {
        "phone": "+79151214674",
        "amount": 200
    },
    payment_phone_send:
    {
        "action_id": 1333
    },
    payment_card_start:
    {
        "amount": 500,
        "link_card": false,
        "fail_url": "http://ayyo.ru/card_fail.html",
        "success_url": "http://ayyo.ru/card_success.html"
    },
    payment_card_send:
    {
        "action_id": 1333
    },
    payment_linked_card_start:
    {
        "card_id": 1,
        "amount": 200
    },
    payment_linked_card_send:
    {
        "action_id": 000
    },
    card_link_start:
    {
        "order_id": 000
    },
    card_link_send:
    {
        "action_id": 000
    },
    card_unlink_start:
    {
        "card_id": 1
    },
    card_unlink_send:
    {
        "action_id": 000
    },
}
var names = new Array();
for (var key in params) {
    if (params.hasOwnProperty(key)) {
        names.push(key);
    }
}

for (var i = 0; i < names.length; i++) {
    $('#customRequests').append('<option value="' + names[i] + '">' + names[i] + '</option>');
}

id = 0;

$('#customRequests').change(function () {
    var param = params[$(this).val()];
	
	var request = {
		id: (++id).toString(),
		method: $(this).val(),
		params: param		
	};
	
    var json = JSON.stringify(request, null, 4);
    $('#sendMessage').val(json);
});