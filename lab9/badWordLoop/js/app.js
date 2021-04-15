var bad_words_arr = new Array("clear", "water", "tires");

var bad_alert_arr = new Array();
var bad_alert_count = 0;
function validate_text() {
  reset_alert_count();
  var compare_text = document.form1.text.value;
  for (var i = 0; i < bad_words_arr.length; i++) {
    for (var j = 0; j < compare_text.length; j++) {
      if (
        bad_words_arr[i] ==
        compare_text.substring(j, j + bad_words_arr[i].length).toLowerCase()
      ) {
        bad_alert_arr[bad_alert_count] = compare_text.substring(
          j,
          j + bad_words_arr[i].length
        );
        bad_alert_count++;
      }
    }
  }
  var _alert_text = "";
  for (var k = 1; k <= bad_alert_count; k++) {
    alert_text += "\n" + "(" + k + ")" + bad_alert_arr[k - 1];
  }
  if (bad_alert_count > 0) {
    alert(
      "the message is not allowed to be delivered\nThe following words were found and are considered illegal:\n__________________\n" +
        alert_text +
        "\n ________"
    );
    document.form1.text.select();
  } else {
    document.form1.submit();
  }
}
function select_area() {
  document.form1.text.select();
}
window.onload = reset_alert_count;
