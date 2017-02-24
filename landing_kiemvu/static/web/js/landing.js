function submit_ticket(){
    
	var email = $('#email').val();
	if(email == '' || validateEmail(email) == false ){
		$('.msg_kq').html('Bạn vui lòng nhập đúng địa chỉ email !');
		$('#email').focus();
	}else{
        $.ajax({
            type:"POST",
            dataType: "json",
            url: base_url + 'ticket/checkEmailConfirm',
            data: {'email':email},
            success:function(result){
                if(result.status == 1) {

                    $('#popupTicket').modal('toggle');

                    swal("Chúc mừng", "Bạn vui lòng vào địa chỉ email để hoàn tất đăng ký tham gia !", "success");
                }else{
                    $('.msg_kq').html(result.msg);
                }
            }
        });

	}
	setTime('.msg_kq');
}

/* TURN OFF OTP ^_^ -------------------------------------------------------------------------- */
function submit_ticket_old(){
    var email = $('#email').val();
    var phone = $('#phone').val();
    if(email == '' || validateEmail(email) == false ){
        $('.msg_kq').html('Bạn vui lòng nhập đúng địa chỉ email !');
        $('#email').focus();
    }else if(phone == '' || is_number(phone) == false){
        $('.msg_kq').html('Bạn vui lòng nhập đúng số điện thoại !');
        $('#phone').focus();
    }else{
        $.ajax({
            type:"POST",
            dataType: "json",
            url: base_url + 'ticket/getOTPCode',
            data: {'email':email, 'phone':phone},
            success:function(result){
                if(result.status == 1) {
                    console.log('Tan heu');
                    $('#id_ticket').val(result.id);

                    $('#popupTicket').modal('toggle');

                    $('#popupOtp').modal('toggle');

                }else{
                    $('.msg_kq').html(result.msg);
                }
            }
        });

    }
    setTime('.msg_kq');
}

function confirm_otp(){
    var id_ticket = $('#id_ticket').val();
    var otp_input = $('#otp').val();
    if( otp_input == '' ){
        $('.msg_kq_otp').html('Vui lòng nhập mã Xác Nhận OTP !');
    }else{
        $.ajax({
            type:"POST",
            dataType: "json",
            url: base_url + 'ticket/checkOTPCode',
            data: {'otp_input':otp_input, 'id_ticket':id_ticket},
            success:function(result){
                if(result.status == 1) {
                    // console.log('thanh cong');
                    $('#popupOtp').modal('toggle');
                    sweetAlert({"title":"Chúc mừng", "text" : result.msg, "type" : "success"}, function(){ console.log('ádd'); });
                }else{
                    $('.msg_kq_otp').html(result.msg);
                }
            }
        });
    }
}

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
function is_number(s){
    test="0123456789";
    i=0;
    len=s.length;
    if((s.substring(0,1)=='-'||s.substring(0,1)=='+')&&len!=1)
    i=1;
        isnum=true;
    while(i<len&&isnum){
        c=s.substring(i,i+1);
        if(test.indexOf(c,0)==-1)
            isnum=false;
        else
            ++i;
    }
    return isnum;
}

function setTime(kq){
    setInterval(function(){
        $(kq).html("");
    },
    4000);
}