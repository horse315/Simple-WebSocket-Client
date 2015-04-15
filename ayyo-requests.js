var requests = {
    login_phone_start:
    {
        "id": "12345",
        "method": "login_phone_start",
        "params": {
            "phone": "+79151214674"
        }
    },
    login_phone_send:
    {
        "id": "12345",
        "method": "login_phone_send",
        "params": {
            "action_id": 21
        }
    },
    login_phone_sms_code_check:
    {
        "id": "12345",
        "method": "login_phone_sms_code_check",
        "params": {
            "phone": "+79151214674",
            "sms_code": "000"
        }
    },
    login_access_token:
    {
        "id": "12345",
        "method": "login_access_token",
        "params": {
            "access_token": "tokeeen"
        }
    },
    payment_phone_start:
    {
        "id": "12345",
        "method": "payment_phone_start",
        "params": {
            "phone": "+79151214674",
            "amount": 200
        }
    },
    payment_phone_send:
    {
        "id": "12345",
        "method": "payment_phone_send",
        "params": {
            "action_id": 1333
        }
    },
    payment_card_start:
    {
        "id": "12345",
        "method": "payment_card_start",
        "params": {
            "amount": 500,
            "link_card": false,
            "fail_url": "http://ayyo.ru/card_fail.html",
            "success_url": "http://ayyo.ru/card_success.html"
        }
    },
    payment_card_send:
    {
        "id": "12345",
        "method": "payment_card_send",
        "params": {
            "action_id": 1333
        }
    },
    payment_linked_card_start:
    {
        "id": "12345",
        "method": "payment_linked_card_start",
        "params": {
            "card_id": 1,
            "amount": 200
        }
    },
    payment_linked_card_send:
    {
        "id": "12345",
        "method": "payment_linked_card_send",
        "params": {
            "action_id": 000
        }
    },
    card_link_start:
    {
        "id": "12345",
        "method": "card_link_start",
        "params": {
            "order_id": 000
        }
    },
    card_link_send:
    {
        "id": "12345",
        "method": "card_link_send",
        "params": {
            "action_id": 000
        }
    },
    card_unlink_start:
    {
        "id": "12345",
        "method": "card_unlink_start",
        "params": {
            "card_id": 1
        }
    },
    card_unlink_send:
    {
        "id": "12345",
        "method": "card_unlink_send",
        "params": {
            "action_id": 000
        }
    },
}
var names = new Array();
for (var key in requests) {
    if (requests.hasOwnProperty(key)) {
        names.push(key);
    }
}

for (var i = 0; i < names.length; i++) {
    $('#customRequests').append('<option value="' + names[i] + '">' + names[i] + '</option>');
}

$('#customRequests').change(function () {
    var request = requests[$(this).val()];
    var json = JSON.stringify(request, null, 4);
    $('#sendMessage').val(json);
});