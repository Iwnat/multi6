function joinform_check() {
  var id = document.getElementById("_id");
  var pw = document.getElementById("_pw");
  var pwCheck = document.getElementById("_pwCheck");
  var name = document.getElementById("_name");
  var phone = document.getElementById("_hp");
  var email = document.getElementById("_email");

  if (id.value == "") {
    alert("아이디를 입력하세요.");
    id.focus();
    return false;
  }

  if (pw.value == "") {
    alert("비밀번호를 입력하세요.");
    pwd.focus();
    return false;
  }

  //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
  var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if (!pwCheck.test(pw.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
    pw.focus();
    return false;
  }

  if (pwCheck.value !== pw.value) {
    alert("비밀번호가 일치하지 않습니다..");
    pwCheck.focus();
    return false;
  }

  if (name.value == "") {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  }

  var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

  if (!reg.test(phone.value)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    phone.focus();
    return false;
  }

  if (email_id.value == "") {
    alert("이메일 주소를 입력하세요.");
    email_id.focus();
    return false;
  }
  document.join.submit();
}

//아이디 중복체크 팝업창(현재 공백문서)
function id_check() {
  //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
  window.open(
    "",
    "아이디 중복확인",
    "width=600, height=300, left=300, top=100"
  );
}
