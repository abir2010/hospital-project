console.log("connected");

// function myFunction(x) {
//     const pagination = document.getElementById("pagination");
//     if (x.matches) {
//         pagination.classList.add("pagination-sm");
//         pagination.classList.remove("pagination-lg");
//     } else {
//         pagination.classList.remove("pagination-sm");
//         pagination.classList.add("pagination-lg");
//         Color = "pink";
//     }
// }

// var x = window.matchMedia("(max-width: 560px)");
// myFunction(x);
// x.addListener(myFunction);

const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputEmail = document.getElementById("inputEmail3");
const inputNumber = document.getElementById("inputPhoneNumber");
const inputAddress = document.getElementById("inputAddress");
const check1 = document.getElementById("gridCheck1");
const check2 = document.getElementById("gridCheck2");
const check3 = document.getElementById("gridCheck3");
const check4 = document.getElementById("gridCheck4");
const check5 = document.getElementById("gridCheck5");
const check6 = document.getElementById("gridCheck6");

document
    .getElementById("submit-button")
    .addEventListener("click", function(event) {
        if (
            inputAge.value != "" &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check1.checked == true
        ) {
            alert(
                "ডাক্তার : আবুল ফযল\n Designation : এফ. আর. সি. এস\n সময় : 7:00 - 9:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৫৩৬২৭৪৩৫৬\n"
            );
        } else if (
            inputAge.value != null &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check2.checked == true
        ) {
            alert(
                "ডাক্তার : আবুল কাশেম\n Designation : এফ. আর. সি. এস.\n সময় : 8:00 - 9:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৩৪৫৩৬৪৩৫৯\n"
            );
        } else if (
            inputAge.value != null &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check3.checked == true
        ) {
            alert(
                "ডাক্তার : রেজাউল করিম\n Designation : এম. বি. বি. এস.\n সময় : 6:00 - 10:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৭৬৬৬৭৪৩৭৮\n"
            );
        } else if (
            inputAge.value != null &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check4.checked == true
        ) {
            alert(
                "ডাক্তার : আবুল ফযল\n Designation : এফ. আর. সি. এস\n সময় : 7:00 - 9:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৫৩৬২৭৪৩৫৬\n"
            );
        } else if (
            inputAge.value != null &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check5.checked == true
        ) {
            alert(
                "ডাক্তার : নজরুল হক\n Designation : এফ. আর. সি. এস\n সময় : 10:00 - 12:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৫৩৬২৭৪৩৫৬\n"
            );
        } else if (
            inputAge.value != null &&
            inputEmail.value != "" &&
            inputNumber.value != null &&
            inputAddress.value != "" &&
            inputName.value != "" &&
            check6.checked == true
        ) {
            alert(
                "ডাক্তার : এম এ হাসান\n Designation : এম. বি. বি. এস, এফ. আর. সি. এস\n সময় : 7:00 - 9:00 pm\n আপনার আপয়েন্টমেন্ট নিশ্চিত করতে নিচের নম্বর এ দ্রুত কল দিন।\n ০১৫৪৪৪৪৪৩৫৬\n"
            );
        } else {
            alert("সকল তথ্য দিয়ে ফর্ম পূরন করুন।");
            location.reload();
        }
    });