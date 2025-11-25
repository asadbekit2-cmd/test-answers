const PRELOADED_TESTS = [
  {
    "id": "php-test",
    "title": "PHP Test",
    "description": "Test your PHP knowledge",
    "questions": [
      {
        "type": "multiple-choice",
        "question": "PHP kod blokini boshlashning to'g'ri yo'li qanday?",
        "options": [
          "<script>",
          "<php>",
          "<?php",
          "<code>"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da o'zgaruvchini qanday e'lon qilish mumkin?",
        "options": [
          "var $variable;",
          "let $variable;",
          "int $variable;",
          "$variable;"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu joyda o'zgaruvchi nomi nima? $son = 10;",
        "options": [
          "number",
          "son",
          "sanoq",
          "$son"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHP da to‘g‘ri o‘zgaruvchi nomi hisoblanadi?",
        "options": [
          "$1variable",
          "$_variable",
          "$variable-name",
          "$variable name"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da har bitta qator tugashida qaysi belgi bo'lishi kerak?",
        "options": [
          ".",
          ";",
          "&",
          "$"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHPda bitta qatorni qanday kommenga olinadi ?",
        "options": [
          "# this is a comment",
          "// this is a comment",
          "-- this is a comment",
          "### this is a comment"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHP da mantiqiy operator hisoblanadi?",
        "options": [
          "&&",
          "+",
          "-",
          "="
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHPda if ifodasi uchun to‘g‘ri sintaksis?",
        "options": [
          "if condition { }",
          "if (condition) { }",
          "if condition: { }",
          "if (condition): { }"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHPda elseif bayonoti uchun to‘g‘ri sintaksis?",
        "options": [
          "elseif (condition) { }",
          "elseif condition { }",
          "else (condition) { }",
          "elseif"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da massiv qanday yaratiladi?",
        "options": [
          "$array = ();",
          "$array = {};",
          "$array = new Array();",
          "$array = array(); or $array = [];"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "$cars = array(\"Volvo\", \"BMW\", \"Toyota\");Ushbu array nechta elementdan iborat?",
        "options": [
          "3",
          "5",
          "6",
          "2"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "$numbers = array(4, 6, 2, 22, 11); sort($numbers); Ushbu fubksiya ishlaganda natija qanaqa bo'ladi?",
        "options": [
          "2,4,6,11,22",
          "2,4,11,6,22",
          "6,2,11,4,22",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHPda for siklining sintaksisi to‘g‘ri?",
        "options": [
          "for (sikl boshanishi; shart; sakrash) { }",
          "for (sikl boshanishi, shart, sakrash) { }",
          "for (sikl boshanishi, shart, sakrash)",
          "for sikl boshanishi, shart, sakrash { }"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHP da while sikli uchun to‘g‘ri sintaksis?",
        "options": [
          "while condition { }",
          "while condition { }",
          "while (condition): { }",
          "while condition: { }"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHP da do-while sikli uchun to‘g‘ri sintaksis?",
        "options": [
          "do { } while (condition);",
          "do (condition) { }",
          "do { condition; } while;",
          "do { } while condition;"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHPda qanday qilib sikldan chiqish mumkin?",
        "options": [
          "exit",
          "stop",
          "break",
          "end"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da funksiyani qanday qilib yaratish mumkin?",
        "options": [
          "function myFunction() { }",
          "define function myFunction() { }",
          "create function myFunction() { }",
          "new function myFunction() { }"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHPda funktsiyani chaqirishning to'g'ri usuli qanday?",
        "options": [
          "call myFunction();",
          "myFunction();",
          "function myFunction();",
          "execute myFunction();"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagilardan qaysi biri PHP da funksiyaga parametr o‘tkazishning to‘g‘ri usuli hisoblanadi?",
        "options": [
          "function myFunction $param { }",
          "function myFunction()($param) { }",
          "function myFunction($param) { }",
          "function myFunction(param) { }"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da funksiyadan qiymat qaytarish uchun qaysi kalit so‘zdan foydalaniladi?",
        "options": [
          "break",
          "continue",
          "return",
          "yield"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da HTTP POST usuli orqali yuborilgan forma ma'lumotlarini olish uchun qanday usuldan foydalanish kerak?",
        "options": [
          "$_REQUEST",
          "$_POST",
          "$_GET",
          "$_FORM"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Agar forma foydalanuvchi nomi maydonida \"Alice\" ga o'rnatilgan bo'lsa, quyidagi PHP kodining chiqishi qanday bo'ladi?",
        "options": [
          "username",
          "$_POST",
          "Alice",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da POST metodi yordamida formadan ma'lumot yuborilganligini qanday tekshirish mumkin?",
        "options": [
          "if ($_REQUEST)",
          "if ($_POST)",
          "if ($_SERVER['REQUEST_METHOD'] == 'POST')",
          "if ($_POST['submit'])"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "GET usuli yordamida yuborilgan email deb nomlangan input maydonidan qiymatni olishning to'g'ri yo'li qanday?",
        "options": [
          "$_GET['email']",
          "$_POST['email']",
          "$_REQUEST['email']",
          "$_FORM['email']"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da fayl yuklash maʼlumotlarini olish uchun qaysi superglobal massiv ishlatiladi?",
        "options": [
          "$_UPLOADS",
          "$_FILES",
          "$_DOCUMENTS",
          "$_POST"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Agar forma 12345 qiymati bilan token deb nomlangan yashirin maydon bilan yuborilsa, quyidagi PHP kodining chiqishi qanday bo'ladi?",
        "options": [
          "token",
          "12345",
          "$_POST",
          "Nothing"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qanday qilib POST usuli yordamida hobbies[] nomli shakl maydonidan bir nechta qiymatlarni olishingiz mumkin?",
        "options": [
          "$_POST['hobbies[]']",
          "$_POST['hobbies.all']",
          "$_POST['hobbies[]']",
          "$_POST['hobbies']"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi PHP funktsiyasi o'zgaruvchining null emasligini tekshirish uchun ishlatiladi?",
        "options": [
          "isset()",
          "is_null()",
          "validate()",
          "header()"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da \"Salom dunyo\" ni chiqarish qanday bo'ladi?",
        "options": [
          "echo \"Salom dunyo\";",
          "print(\"Salom\")",
          "cout(\"Salom dunyo\")",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da barcha o'zgaruvchilar qaysi belgi bilan boshlanadi?",
        "options": [
          "&",
          "$",
          "#",
          "%"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Get usuli yordamida yuborilgan shakldan ma'lumotni qanday olish mumkin?",
        "options": [
          "$_GET[]",
          "$_FILES[]",
          "$_POST[]",
          "$_COOKIE[]"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da satrlar uchun bittalik tirnoq ( ' ' ) va qo'sh tirnoq ( \" \" ) dan foydalanishingiz mumkin:",
        "options": [
          "Ha",
          "Yo'q",
          "A va B javoblar to'g'ri",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "$count o'zgaruvchisiga 1 qo'shishning to'g'ri yo'li qanday?",
        "options": [
          "$count = $count + 2;",
          "$count = +1;",
          "$count --;",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da cookie faylini qanday yaratasiz?",
        "options": [
          "createcookie();",
          "setcookie()",
          "makeCookie()",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP faylining kengaytmasi nima?",
        "options": [
          ".php",
          ".html",
          ".css",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP qaysi yili ishlab chiqilgan?",
        "options": [
          "1980",
          "1994",
          "1970",
          "2011"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ko'p qatorli sharhlar ____ ichida yozilishi mumkin",
        "options": [
          "A. // and //",
          "A. ## and ##",
          "/* and */",
          "A. /// and ///"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da qaysi oʻzgaruvchi nomi xato yozilgan?",
        "options": [
          "age",
          "Age",
          "_age",
          "1age"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "PHP da chiqarish funksiyasi bu ?",
        "options": [
          "print",
          "echo",
          "console.log",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da nechta sikl bor?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da ikkita satrni qanday qilib birlashtirish mumkin?",
        "options": [
          "$str1 + $str2",
          "concat($str1, $str2)",
          "$str1 . $str2",
          "strcat($str1, $str2)"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da o'zgaruvchining ma'lum bir qiymatga tengligini qanday tekshirish mumkin?",
        "options": [
          "if ($var = \"value\")",
          "if ($var == \"value\")",
          "if ($var === \"value\")",
          "b) va c)"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "PHP da o'zgaruvchini belgilashda qanday belgidan foydalaniladi?",
        "options": [
          "@",
          "#",
          "$",
          "%"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da shartni ifodalashda \"va\" operatori qanday ishlatiladi?",
        "options": [
          "OR",
          "&&",
          "||",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da shartni ifodalashda \"yoki\" operatori qanday ishlatiladi?",
        "options": [
          "YOKI",
          "OR",
          "AND",
          "VA"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da assotsiativ array qanday e'lon qilinadi?",
        "options": [
          "$array = ();",
          "$arr = array(\"key\" => \"value\");",
          "$array = new Array();",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "PHP da arrayning oxiriga element qo'shish uchun qaysi funksiya ishlatiladi?",
        "options": [
          "array_add($arr, $value);",
          "array_push($arr, $value);",
          "add_to_array($arr, $value);",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Quyidagi PHP kodining natijasi qanday bo'ladi, agar forma username maydoni bilan \"Ali\" qiymatiga ega bo'lib yuborilgan bo'lsa?",
        "options": [
          "username",
          "Ali",
          "Hech narsa",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Formani POST usuli orqali yuborilganligini qanday tekshirish mumkin?",
        "options": [
          "if ($_REQUEST)",
          "if ($_POST)",
          "if ($_SERVER['REQUEST_METHOD'] == 'POST')",
          "if ($_POST['submit'])"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "GET usuli orqali yuborilgan form ma'lumotlarini qanday olish mumkin?",
        "options": [
          "$_GET['email']",
          "$_POST['email']",
          "$_REQUEST['email']",
          "$_FORM['email']"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da fayl yuklash uchun form tagining qaysi atributi zarur?",
        "options": [
          "action",
          "method",
          "enctype",
          "target"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "PHP da fayl yuklash uchun qaysi enctype qiymati ishlatiladi?",
        "options": [
          "application/x-www-form-urlencoded",
          "text/plain",
          "multipart/form-data",
          "application"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "HTML formaning action atributining vazifasi nima?",
        "options": [
          "Ma'lumotlar qaysi faylga jo'natishni aniqlaydi",
          "Ma'lumotlarni jo'natish usulini aniqlaydi",
          "Bunaqa atribut yo'q",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "PHP da array elementlarini saralash uchun qaysi funksiya ishlatiladi?",
        "options": [
          "sort()",
          "order()",
          "arrange()",
          "header()"
        ],
        "correctAnswer": 0
      }
    ],
    "completed": false,
    "score": null
  },
  {
    "id": "sql-test",
    "title": "SQL Test",
    "description": "Test your SQL knowledge",
    "questions": [
      {
        "type": "multiple-choice",
        "question": "SQL nima?",
        "options": [
          "Strukturaviy Sifatlar Loyihasi",
          "Ma'lumotlar bazasini boshqarish tizimi",
          "Strukturaviy So'rovlar Tili",
          "Ma'lumotlarni saqlash formati"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "SQL qaysi turdagi bazalarda ishlatiladi?",
        "options": [
          "NoSQL",
          "Fayl tizimlari",
          "Relyatsion ma'lumotlar bazasi",
          "Yodda saqlanadigan ma'lumotlar bazasi"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "SQLda qaysi operator ma'lumotlarni kiritish uchun ishlatiladi?",
        "options": [
          "INSERT",
          "UPDATE",
          "DELETE",
          "SELECT"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "SQLda ma'lumotlarni tanlash uchun qaysi operator ishlatiladi?",
        "options": [
          "DELETE",
          "INSERT",
          "UPDATE",
          "SELECT"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "SQLda ma'lumotlarni o'zgartirish uchun qaysi operator ishlatiladi?",
        "options": [
          "DELETE",
          "INSERT",
          "UPDATE",
          "SELECT"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "MySQL nima?",
        "options": [
          "Dasturlash tili",
          "Fayl tizimi",
          "Relyatsion ma'lumotlar bazasi boshqarish tizimi",
          "Brauzer"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi buyruq yordamida yangi ma'lumotlar bazasi yaratiladi?",
        "options": [
          "CREATE TABLE",
          "CREATE DATABASE",
          "CREATE VIEW",
          "CREATE INDEX"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda mavjud ma'lumotlar bazalarini ko'rish uchun qaysi buyruq ishlatiladi?",
        "options": [
          "SHOW TABLES",
          "SHOW INDEXES",
          "SHOW DATABASES",
          "SHOW VIEWS"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Yangi jadval yaratish uchun qaysi buyruq ishlatiladi?",
        "options": [
          "CREATE TABLE",
          "CREATE DATABASE",
          "CREATE INDEX",
          "CREATE VIEW"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda jadval nima?",
        "options": [
          "Fayl",
          "Ma'lumotlarni saqlash joyi",
          "Ma'lumotlar bazasi",
          "Ma'lumotlar tuzilmasi"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Jadvallarning tuzilmasini ko'rish uchun qaysi buyruq ishlatiladi?",
        "options": [
          "DESCRIBE TABLE",
          "SHOW TABLES",
          "DESCRIBE DATABASE",
          "SHOW COLUMNS"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Jadvallarni ko'rish uchun qaysi buyruq ishlatiladi?",
        "options": [
          "LIST TABLES",
          "DISPLAY TABLES",
          "SHOW TABLES",
          "VIEW TABLES"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda qaysi ma'lumot turi butun sonlarni saqlaydi?",
        "options": [
          "VARCHAR",
          "DATE",
          "INT",
          "TEXT"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi ma'lumot turi matnni saqlash uchun ishlatiladi?",
        "options": [
          "INT",
          "DATE",
          "FLOAT",
          "VARCHAR"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda sanalarni saqlash uchun qaysi ma'lumot turi ishlatiladi?",
        "options": [
          "DATETIME",
          "VARCHAR",
          "INT",
          "FLOAT"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Katta hajmdagi matnni saqlash uchun qaysi ma'lumot turi ishlatiladi?",
        "options": [
          "VARCHAR",
          "TEXT",
          "CHAR",
          "DATE"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida ma'lumotlarni tanlash mumkin?",
        "options": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "SELECT bayonotida ustunlarga nom berish uchun qaysi kalit so'z ishlatiladi?",
        "options": [
          "AS",
          "LIKE",
          "ALIAS",
          "IS"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida barcha ustunlar tanlanadi?",
        "options": [
          "ALL",
          "'*'",
          "%",
          "ANY"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z ustunning qiymati bo'sh bo'lmaganligini tekshiradi?",
        "options": [
          "NULL",
          "NOT NULL",
          "UNIQUE",
          "PRIMARY"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida ma'lumotlar filtrlanadi?",
        "options": [
          "FILTER",
          "WHERE",
          "ORDER BY",
          "SELECT"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "WHERE bayonotida qaysi operator yordamida bir nechta shartlar qo'shiladi?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "BOTH"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida natijalar tartiblanadi?",
        "options": [
          "SORT BY",
          "GROUP BY",
          "ORDER BY",
          "ARRANGE BY"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "ORDER BY bayonotida qaysi kalit so'z yordamida teskari tartibi belgilanadi?",
        "options": [
          "ASC",
          "DESC",
          "DOWN",
          "DECREASE"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "ORDER BY bayonotida qaysi kalit so'z yordamida o'sish tartibi belgilanadi?",
        "options": [
          "ASC",
          "DESC",
          "UP",
          "INCREASE"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "INSERT INTO qachon ishlatiladi?",
        "options": [
          "Ma'lumotlarni yangilash uchun",
          "Ma'lumotlarni kiritish uchun",
          "Ma'lumotlarni o'chirish uchun",
          "Ma'lumotlarni ko'rish uchun"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "UPDATE buyrug'i nima qiladi?",
        "options": [
          "Yangi jadval yaratadi",
          "Ma'lumotlarni yangilaydi",
          "Ma'lumotlarni o'chiradi",
          "Ma'lumotlarni qo'shadi"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "DELETE buyrug'i nima qiladi?",
        "options": [
          "Jadval yaratadi",
          "Ma'lumotlarni qo'shadi",
          "Ma'lumotlarni yangilaydi",
          "Ma'lumotlarni o'chiradi"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda avto_increment qaysi ma'lumot turida ishlatiladi?",
        "options": [
          "CHAR",
          "VARCHAR",
          "INT",
          "DATE"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "AUTO_INCREMENT nima uchun ishlatiladi?",
        "options": [
          "Ma'lumotlarni kiritish",
          "Yangi qiymat yaratish",
          "Avtomatik ravishda qiymatni oshirish",
          "Ma'lumotlarni o'chirish"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ma'lumotlarni yangilashda qaysi kalit so'z ishlatiladi?",
        "options": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda primary key nima?",
        "options": [
          "Unikal ma'lumotlar",
          "Takrorlanadigan qiymatlar",
          "Jadvaldagi asosiy kalit ustun",
          "Qo'shimcha ustun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Primary key qaysi xususiyatga ega bo'lishi kerak?",
        "options": [
          "NULL qiymatga ega bo'lishi mumkin",
          "To'g'ri javob yo'q",
          "Takrorlanishi mumkin",
          "Unikal bo'lishi kerak"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Foreign key nima?",
        "options": [
          "Asosiy ustun",
          "Unikal ustun",
          "Boshqa jadvaldagi ustunga ishora qiluvchi ustun",
          "Qo'shimcha ustun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Foreign key qaysi ma'lumotlar uchun ishlatiladi?",
        "options": [
          "Unikal ma'lumotlar",
          "Boshqa jadval bilan bog'langan ma'lumotlar",
          "Takrorlanadigan ma'lumotlar",
          "Barcha ma'lumotlar"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "AUTO_INCREMENT qaysi kalit so'z bilan ishlatiladi?",
        "options": [
          "PRIMARY",
          "FOREIGN",
          "UNIQUE",
          "AUTO"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda INNER JOIN nima uchun ishlatiladi?",
        "options": [
          "Ma'lumotlarni qo'shish uchun",
          "Jadval yaratish uchun",
          "Ikki yoki undan ortiq jadvalni bog'lash uchun",
          "Ma'lumotlarni o'chirish uchun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "LEFT JOIN qachon ishlatiladi?",
        "options": [
          "Faqat chap jadvaldagi ma'lumotlarni tanlash uchun",
          "Faqat o'ng jadvaldagi ma'lumotlarni tanlash uchun",
          "Chap jadval va umumiy ma'lumotlarni tanlash uchun",
          "Faqat umumiy ma'lumotlarni tanlash uchun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "RIGHT JOIN qachon ishlatiladi?",
        "options": [
          "Faqat chap jadvaldagi ma'lumotlarni tanlash uchun",
          "Faqat o'ng jadvaldagi ma'lumotlarni tanlash uchun",
          "O'ng jadval va umumiy ma'lumotlarni tanlash uchun",
          "Faqat umumiy ma'lumotlarni tanlash uchun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda JOIN qachon ishlatiladi?",
        "options": [
          "Faqat bitta jadvaldagi ma'lumotlarni ko'rsatish uchun",
          "Ikki yoki undan ortiq jadvalni bog'lash uchun",
          "Jadval yaratish uchun",
          "Ma'lumotlarni o'chirish uchun"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "SQL - bu ?",
        "options": [
          "Dasturlash tili",
          "Structured Query Language",
          "Ma'lumotlar bazasi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Subqueryning asosiy maqsadi nima?",
        "options": [
          "Ma'lumotlarni o'chirish",
          "Ma'lumotlarni kiritish",
          "Murakkab so'rovlar yozish",
          "Jadval yaratish"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "MySQLda indeks qanday yaratiladi?",
        "options": [
          "CREATE INDEX",
          "CREATE TABLE",
          "CREATE DATABASE",
          "CREATE VIEW"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Indeks qaysi kalit so'z bilan o'chiriladi?",
        "options": [
          "DROP INDEX",
          "DELETE INDEX",
          "REMOVE INDEX",
          "ERASE INDEX"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Indeks qaysi holatda samarali ishlaydi?",
        "options": [
          "Katta hajmdagi ma'lumotlar bilan ishlashda",
          "Kichik hajmdagi ma'lumotlar bilan ishlashda",
          "Faqat matnli ma'lumotlar bilan ishlashda",
          "Faqat sanali ma'lumotlar bilan ishlashda"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "View nima?",
        "options": [
          "Asosiy jadval",
          "Ma'lumotlarni ko'rsatish uchun yaratilgan virtual jadval",
          "Ma'lumotlarni o'chirish uchun",
          "Ma'lumotlarni kiritish uchun"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qanday qilib view yaratiladi?",
        "options": [
          "CREATE VIEW",
          "CREATE TABLE",
          "CREATE DATABASE",
          "CREATE INDEX"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "View qaysi holatda ishlatiladi?",
        "options": [
          "Ma'lumotlarni kiritish uchun",
          "Ma'lumotlarni yangilash uchun",
          "Murakkab so'rovlarni soddalashtirish uchun",
          "Ma'lumotlarni o'chirish uchun"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi buyruq yordamida view o'chiriladi?",
        "options": [
          "DROP VIEW",
          "DELETE VIEW",
          "REMOVE VIEW",
          "ERASE VIEW"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida jadvalga yangi ustun qo'shish mumkin?",
        "options": [
          "ADD COLUMN",
          "NEW COLUMN",
          "CREATE COLUMN",
          "INSERT COLUMN"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida jadvaldan ustun o'chiriladi?",
        "options": [
          "REMOVE COLUMN",
          "DELETE COLUMN",
          "DROP COLUMN",
          "ERASE COLUMN"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida jadvaldagi ustun nomi o'zgartiriladi?",
        "options": [
          "RENAME COLUMN",
          "CHANGE COLUMN",
          "ALTER COLUMN",
          "MODIFY COLUMN"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida jadval butunlay o'chiriladi?",
        "options": [
          "DELETE TABLE",
          "REMOVE TABLE",
          "TRUNCATE TABLE",
          "DROP TABLE"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida jadvaldagi ma'lumotlarni ko'rish mumkin?",
        "options": [
          "SELECT",
          "SHOW",
          "DISPLAY",
          "VIEW"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida qatorlar soni aniqlanadi?",
        "options": [
          "COUNT",
          "SUM",
          "AVG",
          "TOTAL"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida jadvaldagi ustunlar orasida noyob qiymatlar tanlanadi?",
        "options": [
          "DISTINCT",
          "UNIQUE",
          "DIFFERENT",
          "EXCLUSIVE"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida qiymatlarni ma'lum diapazonda tanlash mumkin?",
        "options": [
          "BETWEEN",
          "RANGE",
          "LIMIT",
          "WITHIN"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida sonlarning yig'indisini hisoblash mumkin?",
        "options": [
          "COUNT",
          "SUM",
          "TOTAL",
          "ADD"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida eng katta qiymatni tanlash mumkin?",
        "options": [
          "MAX",
          "TOP",
          "HIGH",
          "LARGE"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida eng kichik qiymatni tanlash mumkin?",
        "options": [
          "MIN",
          "LOW",
          "SMALL",
          "LEAST"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi operator yordamida o'rtacha qiymatni hisoblash mumkin?",
        "options": [
          "AVERAGE",
          "MEAN",
          "MEDIAN",
          "AVG"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida ma'lumotlarni guruhlash mumkin?",
        "options": [
          "GROUP BY",
          "CLUSTER",
          "BUNDLE",
          "ORDER BY"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida ma'lumotlarni filtrlagan holda guruhlash mumkin?",
        "options": [
          "HAVING",
          "WHERE",
          "FILTER",
          "QUALIFY"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Qaysi kalit so'z yordamida ma'lumotlarni soni bo'yicha cheklash mumkin?",
        "options": [
          "LIMIT",
          "RESTRICT",
          "CONSTRAIN",
          "REDUCE"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: CREATE DATABASE IF NOT EXISTS bank;",
        "options": [
          "Jadval yaratadi",
          "Jadvalni o'chiradi",
          "ma'lumotlar bazasi yaratadi",
          "ma'lumotlar bazasini o'chiradi"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: DROP TABLE IF EXISTS accounts;",
        "options": [
          "accounts nomli bazani o'chiradi",
          "accounts nomli jadvalni o'chiradi",
          "accounts nomli viewni o'chiradi",
          "accounts nomli bazani bog'laydi"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: CREATE TABLE accounts ( account_id INT AUTO_INCREMENT PRIMARY KEY, ismi VARCHAR(100), balans DECIMAL(10, 2));",
        "options": [
          "accounts nomli bazani yaratadi",
          "accounts nomli jadvalni yaratadi",
          "accounts nomli viewni yaratadi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu yaratilayotgan jadvalda nechta ustun bor: CREATE TABLE accounts ( account_id INT AUTO_INCREMENT PRIMARY KEY, ismi VARCHAR(100), balans DECIMAL(10, 3));",
        "options": [
          "2 ta",
          "1 ta",
          "4 ta",
          "3 ta"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov jadvalda nechta yangi qator yaratadi : INSERT INTO accounts (ismi, balans) VALUES('Ali', 1000.00), ('Vali', 850.00), ('Sami', 720.00), ('Kamol', 930.00),('Dilshod', 1500.00), ('Zarina', 1200.00), ('Gulbahor', 670.00), ('Otabek', 890.00),('Shahnoza', 760.00);",
        "options": [
          "9 ta",
          "6 ta",
          "3 ta",
          "2 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov jadvalda nechta yangi qator yaratadi : INSERT INTO accounts (ismi, balans) VALUES('Iroda', 570.00), ('Tohir', 1100.00),('Lola', 950.00), ('Sardor', 1020.00), ('Madina', 800.00), ('Bobur', 1150.00);",
        "options": [
          "9 ta",
          "6 ta",
          "3 ta",
          "2 ta"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: UPDATE accounts SET balans = balans - 100 WHERE ismi = 'Ali';",
        "options": [
          "jadvaldagi barcha ma'lumotlarni yangilaydi",
          "jadvaldagi berilgan shart bo'yicha ma'lumotlarni yangilaydi",
          "jadvaldagi ustunni o'chiradi",
          "jadvaldagi qatorni o'chiradi"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: CREATE UNIQUE INDEX idx_email ON users(email);",
        "options": [
          "index yaratadi",
          "view yaratadi",
          "trigger yaratadi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovdan jadval nomini ko'rsating : CREATE UNIQUE INDEX idx_email ON users(email);",
        "options": [
          "email",
          "idx_email",
          "users",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovdan index nomini ko'rsating : CREATE UNIQUE INDEX idx_email ON users(email);",
        "options": [
          "email",
          "idx_email",
          "users",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovdan index yaratilayotgan ustun nomini ko'rsating: CREATE UNIQUE INDEX idx_email ON users(email);",
        "options": [
          "email",
          "idx_email",
          "users",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: CREATE VIEW employee_view ASSELECT employee_id, first_name, last_name, department_idFROM employees;",
        "options": [
          "index yaratadi",
          "view yaratadi",
          "trigger yaratadi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 1
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovdagi ma'lumotlar qayerdan olinyapti: SELECT * FROM employee_viewWHERE department_id = 5;",
        "options": [
          "virtual bazadan",
          "protseduradan",
          "o'chirilgan jadvaldan",
          "virtual jadvaldan"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Yaratilayotgan jadvalda nechta ustun bor: CREATE TABLE courses ( CourseID int(11) NOT NULL, CourseName varchar(100) DEFAULT NULL, Instructor varchar(100) DEFAULT NULL, PRIMARY KEY (CourseID));",
        "options": [
          "2 ta",
          "1 ta",
          "3 ta",
          "4 ta"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov jadvalga nechta qator qo'shadi: INSERT INTO courses VALUES (1,'Matematika','Abdulla Qodirov'),(2,'Fizika','Dilshod Bek');",
        "options": [
          "2 ta",
          "1 ta",
          "3 ta",
          "4 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov jadvalga nechta qator qo'shadi: INSERT INTO employees VALUES (1,'Javlon','Ismoilov',1),(2,'Madina','Abdusamatova',2),(3,'Kamol','Aliyev',NULL);",
        "options": [
          "2 ta",
          "1 ta",
          "3 ta",
          "4 ta"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovi qanday ish bajaradi: DROP TABLE IF EXISTS orders;",
        "options": [
          "Jadvalni ko'rsatadi",
          "Jadvaldagi ma'lumotlarni chiqaradi",
          "Jadvaldagi ustunni o'chiradi",
          "Jadvalni o'chiradi"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovi qanday ish bajaradi: DROP TABLE IF EXISTS products;",
        "options": [
          "Jadvalni ko'rsatadi",
          "Jadvaldagi ma'lumotlarni chiqaradi",
          "Jadvaldagi ustunni o'chiradi",
          "Jadvalni o'chiradi"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rovi qanday ish bajaradi: DROP TABLE IF EXISTS students;",
        "options": [
          "Jadvalni o'chiradi",
          "Jadvalni ko'rsatadi",
          "Jadvaldagi ma'lumotlarni chiqaradi",
          "Jadvaldagi ustunni o'chiradi"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Yaratilayotgan jadvalda nechta ustun bor: CREATE TABLE IF NOT EXISTS futbolchilar ( futbolchi_id INT AUTO_INCREMENT PRIMARY KEY, futbolchi_ismi VARCHAR(100), oylik_maoshi DECIMAL(10,2), yillik_maoshi DECIMAL(10,2));",
        "options": [
          "2 ta",
          "1 ta",
          "3 ta",
          "4 ta"
        ],
        "correctAnswer": 3
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov nima ish bajaradi: DELIMITER //CREATE TRIGGER after_insert_playerAFTER INSERT ON futbolchilarFOR EACH ROWBEGIN UPDATE futbolchilar SET yillik_maoshi = NEW.oylik_maoshi * 12 WHERE futbolchi_id = NEW.futbolchi_id;END;//DELIMITER ;",
        "options": [
          "index yaratadi",
          "view yaratadi",
          "trigger yaratadi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov nima ish bajaradi: DELIMITER //CREATE TRIGGER after_update_playerAFTER UPDATE ON futbolchilarFOR EACH ROWBEGIN IF OLD.oylik_maoshi != NEW.oylik_maoshi THEN UPDATE futbolchilar SET yillik_maoshi = NEW.oylik_maoshi * 12 WHERE futbolchi_id = NEW.futbolchi_id; END IF;END;//DELIMITER ;",
        "options": [
          "index yaratadi",
          "view yaratadi",
          "trigger yaratadi",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 2
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu SQL so'rov qanday ish bajaradi: SELECT * FROM students WHERE FirstName = 'Ali';",
        "options": [
          "ismi Ali bo'lgan barcha talaba ma'lumotlarini",
          "jadvaldagi barcha ma'lumotlarni",
          "ismi Ali bo'lgan talabaning faqat ismini",
          "To'g'ri javob yo'q"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ushbu Sql so'rov qanday ish bajaradi: ALTER TABLE orders ADD COLUMN IF NOT EXISTS order_status VARCHAR(50);",
        "options": [
          "yangi qator qo'shadi",
          "yangi ustun qo'shadi",
          "yangi jadval qo'shadi",
          "yangi baza qo'shadi"
        ],
        "correctAnswer": 1
      }
    ],
    "completed": false,
    "score": null
  },
  {
    "id": "ux/ui-test",
    "title": "UX/UI Test",
    "description": "Test your UX/UI design knowledge",
    "questions": [
      {
        "type": "multiple-choice",
        "question": "UI atamasi nima?",
        "options": [
          "User Interface",
          "User Iteraction",
          "User Experience",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX atamasi nima?",
        "options": [
          "User Experience",
          "User Interface",
          "User Expert",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UI nima?",
        "options": [
          "\"Foydalanuvchi interfeysi\" yani maxsulotni foydalanuvchiga ko'rinib turgan qismi.",
          "\"Foydalanuvchi tajribasi\" yani foydalanuvchi va maxsulot o'rtasidagi o'zaro munosabatni o'z ichiga oladi.",
          "\"Foydalanuvchi shovqini\" yani foydalanuvchini o'ziga jalb qiladigan qismi.",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX nima?",
        "options": [
          "\"Foydalanuvchi tajribasi\" yani foydalanuvchi va maxsulot o'rtasidagi o'zaro munosabatni o'z ichiga oladi.",
          "\"Foydalanuvchi interfeysi\" yani maxsulotni foydalanuvchiga ko'rinib turgan qismi.",
          "\"Foydalanuvchi experti\" yani foydalanuvchi maxsulotni tekshirish jarayonidir.",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX dizaynn asosiy tamoyillari nechta?",
        "options": [
          "4 ta",
          "3 ta",
          "5 ta",
          "6 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UI dizaynni asosiy tamoyillari nechta?",
        "options": [
          "5 ta",
          "4 ta",
          "6 ta",
          "7 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX dizaynni foydalanuvchi o'rniga o'zini qoyib ko'rish qaysi tamoyili hisoblanadi.",
        "options": [
          "Empothize",
          "Define",
          "Ideate",
          "Prototype"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX dizaynni muammoli nuqtalarini aniqlash tamoyili qaysi",
        "options": [
          "Define",
          "Empothize",
          "Ideate",
          "Prototype"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX dizaynni muammolarni hal qilish uchun kerak bo'ladigan g'oyalar topish tamoyili qaysi",
        "options": [
          "Ideate",
          "Empothize",
          "Define",
          "Prototype"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX dizaynni boshlang'ich dizaynni arzon shaklini taqdim etish tamoyili qaysi",
        "options": [
          "Prototype",
          "Ideate",
          "Define",
          "Empothize"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UI dizaynni qaysi tamoyili yordamida logotiplar, banner, flayer uchun dizayn qilsa bo'ladi",
        "options": [
          "Graphic Design",
          "Visual Design",
          "Color",
          "Typography"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UI dizaynni qaysi tamoyili yodamida turli hil ranglar bilang ishlashni o'z ichiga oladi.",
        "options": [
          "Color",
          "Typography",
          "Visual Design",
          "Graphic Design"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Dasturiy ta'minot ishlab chiqishda UI/UX dizaynni ahamyati nimalarni o'z ichiga oladi",
        "options": [
          "Barcha javoblar to'g'ri",
          "Foydalanish imkonyati",
          "Sizning brendingizni o'rnatadi",
          "Kamroq xarajat va vaqtni boshqaradi"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanuvchiga qaratilgan dizayn qanday dizayn jarayoni hisoblanadi.",
        "options": [
          "Iterativ jarayon",
          "Tarorlanmas jarayon",
          "Bunday jarayon yoq",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanuchiga qaratilgan dizayn nechta bosqichdan iborat.",
        "options": [
          "4 ta",
          "3 ta",
          "5 ta",
          "6 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX da hissiyotlar asosan nechta turga bo'linadi",
        "options": [
          "3 ta",
          "4 ta",
          "5 ta",
          "6 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX da qaysi ranglar ijobiy hissiyotni beradi",
        "options": [
          "sariq",
          "qora",
          "qizil",
          "binafsha"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX da qaysi ranglar salbiy hissiyotni beradi",
        "options": [
          "qizil",
          "oq",
          "binafsha",
          "sariq"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "UX da qayso ranglar neytral hissiyotni beradi",
        "options": [
          "ko'k",
          "sariq",
          "qizil",
          "qora"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "____________ UX dizayni uchun muhim vositalardir, chunki ular maqsadli auditoriyangizni, ularningehtiyojlari, maqsadlari va xatti-harakatlarini tushunishga yordamberadi. To'g'ri javobni tanlang.",
        "options": [
          "Foydalanuvchi stsenariylari",
          "Foydalanuvchi hissiyotlari",
          "Foydalanuvchi xatti-harakatlari",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Saytning axbarot tayanchi nima?",
        "options": [
          "Axbarot Arxitekturasi",
          "Navigatsiyalar",
          "Sayt xaritasi",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Saytning axbarot arxitekturasi nechta komponetadan iborat.",
        "options": [
          "2 ta",
          "3 ta",
          "4 ta",
          "5 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanuvchi interfeysini komponetalari to'plami nima dep ataladi?",
        "options": [
          "Veb sayt navigatsiyasi",
          "Axbarot arxitekturasi",
          "Sayt xaritasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "__________ bu qidiruv tizimlari uni tekshirish uchunfoydalanadigan veb-saytingizdagi sahifalar ro'yxati. To'g'ri javobni tanlang.",
        "options": [
          "Sayt xaritasi",
          "Axbarot arxitekturasi",
          "Veb sayt navigatsiyasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "__________ yakuniy mahsulotning soddalashtirilgan oq-qoraversiyasi. To'g'ri javobni tanlang.",
        "options": [
          "Wireframe",
          "Sayt xaritasi",
          "Visual Design",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Wireframing turlari nechta.",
        "options": [
          "3 ta",
          "4 ta",
          "5 ta",
          "2 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Wreframingni 1-turi to'gri berilgan javobni tanlang.",
        "options": [
          "Low-Fidelity (lo-fi)",
          "Medium-Fidelity (me-fi)",
          "High-Fidelity (he-fi)",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Wreframingni 2-turi to'g'ri berilgan javobni tnlang.",
        "options": [
          "Medium-Fidelity (me-fi)",
          "Low-Fidelity (lo-fi)",
          "High-Fidelity (he-fi)",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Wreframingni 3-turi to'g'ri berilgan javobni tanlang.",
        "options": [
          "High-Fidelity (he-fi)",
          "Low-Fidelity (lo-fi)",
          "Medium-Fidelity (me-fi)",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "________ bu mahsulotning dastlabki bosqichdagi, arzon shakli. To'g'ri javobni tanlang.",
        "options": [
          "Prototip",
          "Axbarot arxitekturasi",
          "Sayt xaritasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "_________ Bu mahsulotning umumiy estetikasini yaratish va izchil qilishdir. To'g'ri javobni tanlang.",
        "options": [
          "Visual Design",
          "Prototip",
          "Axbarot arxitekturasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Vizual dizayn elementlari to'g'ri berilgan javobni ko'rsatin.",
        "options": [
          "Barcha javoblar to'g'ri",
          "Shakl, chiziq, bo'shliq",
          "Qiymat, hajm",
          "Rang, tekstura"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Vizual dizayn tamoyillari nechta.",
        "options": [
          "7 ta",
          "6 ta",
          "8 ta",
          "5 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Sahifadagi barchaelementlar o'rtasida uyg'unlikhissi yaratish bilan bog'liq. Bu vizual dizaynni qaysi tamoyili hisoblani.",
        "options": [
          "Birlik",
          "Gestalt",
          "Kontrast",
          "Iarxiya"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Bizning individual elementlardan farqli o'laroq, barcha qismlarning yig'indisini idrok etish tendentsiyasini anglatadi. Bu vizual dizaynni qaysi tamoyili hisoblani.",
        "options": [
          "Gestalt",
          "Kontrast",
          "Iarxiya",
          "Masshtab"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Dizayndagi elementlarning ahamiyatidagi farqni ko'rsatadi. Bu vizual dizaynni qaysi tamoyili",
        "options": [
          "Iarxiya",
          "Kontrast",
          "Gestalt",
          "Birlik"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Bu dizayn elementlarini qanday qilib teng taqsimlashimizni boshqaradigan tamoyil. Bu vizual dizaynni qaysi tamoyili",
        "options": [
          "Balans",
          "Birlik",
          "Gestalt",
          "Kontrast"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Rang, qiymat, o'lcham va boshqa omillardagi farqlarni manipulyatsiya qilish orqali biz elementni ajratib ko'rsatish uchun kontrastdan foydalanamiz. Bu vizual dizaynni qaysi tamoyili",
        "options": [
          "Kontrast",
          "Birlik",
          "Gestalt",
          "Balans"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Dizayndagi elementlarning nisbiy o'lchamlarini tavsiflaydi. Bu vizual dizaynni qaysi tamoyili",
        "options": [
          "Masshtab",
          "Gestalt",
          "Birlik",
          "Kontrast"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Bitta elementga e'tiborni yaratadi . Bunga erishish uchun rang, shakl, kontrast, masshtab va/yoki joylashishni aniqlashdan foydalanishimiz mumkin. Bu vizual dizaynni qaysi tamoyili",
        "options": [
          "Dominantlik",
          "Gestalt",
          "Birlik",
          "Balans"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "_______ dizayn uchun kerak bo’ladigan g’oyalar maydoni yoki g’oyalar doskasi. To'g'ri javobni tanlang.",
        "options": [
          "Moodboard",
          "Prototip",
          "Sayt xaritasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "______ bu foydalanuvchilar va mahsulotlar o'rtasidagi o'zaro ta'sirning dizayni. To'g'ri javobni tanlang.",
        "options": [
          "O'zaro tasir dizayni",
          "Visual Design",
          "Graphic Design",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "O'zaro ta'sir dizaynining maqsadi",
        "options": [
          "Foydalanuvchiga o'z maqsadlariga eng yaxshi tarzda erishishga imkon beradigan mahsulotlarni yaratishdir.",
          "Foydalanuvchi o'rniga o'zini qoyib ko'rish",
          "Foydalanuvchilarni xatti-harakatlarini boshqarish",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "O'zaro ta'sir dizaynini nechta o'lchovi mavjud",
        "options": [
          "5 ta",
          "4 ta",
          "6 ta",
          "7 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "So'zlar, tipagrafiyalarni foydalanuvchiga tushunarli qib aks ettirish o'zaro tasir dizaynini qaysi o'lchoviga kiradi.",
        "options": [
          "Words",
          "Typography",
          "Visual Design",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanuvchilar o'zaro aloqada bo'lgan tasvirlar, tipografiya va piktogrammalar kabi grafik elementlarni aks ettirish uchun o'zaro tasir dizaynini qaysi o'lchoviga kiradi.",
        "options": [
          "Visual Rep",
          "Words",
          "Time",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanuvchilar mahsulot bilan qanday jismoniy ob'ektlar orqali o'zaro aloqada bo'lishadi? Sichqoncha yoki sensorli panelli noutbukmi? shu savollarga javob beruvchi o'zaro tasir sizaynini o'lchovi qaysi.",
        "options": [
          "Object/Space",
          "Words",
          "Visual Rep",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "________ bu o'zaro tasir dizayni o'lchov biroz mavhum bo'lib tuyulsa-da, u asosan vaqt o'tishi bilan o'zgarib turadigan ommaviy axborot vositalariga tegishli (animatsiya, videolar, tovushlar). To'g'ri javobni tanlang.",
        "options": [
          "Time",
          "Words",
          "Visual Rep",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "________ bu o'zaro tasir dizayni o'lchovi mahsulot mexanizmini o'z ichiga oladi: foydalanuvchilar veb-saytdagi harakatlarni qanday amalga oshiradilar. To'g'ri javobni tanlang.",
        "options": [
          "Behavior",
          "Time",
          "Visual Rep",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Har qanday vaqtda foydalanuvchi interfeysi quyidagi savollarga javob berishi kerak:",
        "options": [
          "Barcha javoblar to'g'ri",
          "Qayerdaman? Hozir nima bo'ldi?",
          "Nimalar bo'lyapti? Keyin nima bo'ladi?",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "O'zaro tasir dizayni UI gami yoki UX dizaynga kiradimi?",
        "options": [
          "UX",
          "UI",
          "Ikkalasiga ham kirmaydi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish testi (Usability Test) nechta elementi mavjud",
        "options": [
          "3 ta",
          "2 ta",
          "4 ta",
          "5 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish testida (Usability Test) mashg'ulotchi ishtirokchini test jarayoni bo'yicha boshqaruvchi element.",
        "options": [
          "Facilitator",
          "Task",
          "Participant",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish testida (Usability Test) ishtirokchi real hayotda bajarishi mumkin bo'lgan real harakatlar qaysi elementiga kiradi.",
        "options": [
          "Task",
          "Participant",
          "Facilitator",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish testida (Usability Test) mahsulot yoki tizimdan doimiy yoki malum ehtiyojlari uchun foydalanadigan elementi qaysi.",
        "options": [
          "Participant",
          "Task",
          "Facilitator",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish qulayligini (Usability) tekshirish turlari nechta.",
        "options": [
          "6 ta",
          "5 ta",
          "4 ta",
          "7 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish qulayligini (Usability) tekshirish turlari qaysilar?",
        "options": [
          "Barcha javoblar to'g'ri",
          "Qualitative, Quantitative",
          "Moderated Unmoderated",
          "In-Person, Remote"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "_______ bu mahsulot yoki xizmatdan har bir kishi foydalanishi mumkinmi yoki yo'qmi degan tushunchadir. To'g'ri javobni tanlang",
        "options": [
          "Accessibility",
          "Usability",
          "Foydalanuvchi hatti-harakatlari",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish imkoniyati (Accessibility) muammolari turlari nechta.",
        "options": [
          "5 ta",
          "4 ta",
          "6 ta",
          "7 ta"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish imkoniyati (Accessibility) muammolari turlari to'g'ri berilgan qatorni ko'rsating.",
        "options": [
          "Barcha javoblar to'g'ri",
          "Aqli zaif, Ko'rishda muammosi bor insonlar",
          "Gapirishda nuqsoni bor odamlar",
          "Eshitishda muammosi bor insonlar, Nogiron insonlar"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Aqli zaif foydalanuvchilar uchun qanday foyalanish imkoniyati yaratsak bo'ladi.",
        "options": [
          "Saytni dizaynini imkon qadar sodda ishlab chiqib aqliy bosimni kamaytirish kerak",
          "Ranglarni to'g'ri tanlash kerak. Masalan: qoraga oq rang shunga o'xshash ranglar tanlash kerak",
          "Substiter qo'shish kerak",
          "Chat botlar yaratish kerak"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Ko'rishda muammosi bos insonlar uchun qanday foydalanish imkoniyati yaratsak bo'ldi",
        "options": [
          "Ranglarni to'g'ri tanlash kerak. Masalan: qoraga oq rang shunga o'xshash ranglar tanlash kerak",
          "Saytni dizaynini imkon qadar sodda ishlab chiqib aqliy bosimni kamaytirish kerak",
          "Substiter qo'shish kerak",
          "Chat botlar yaratish kerak"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Eshitishda muammosi bor insonlar uchun asosan qanday foydalanish imkoniyati yaratsak bo'ladi",
        "options": [
          "Substiter qo'shish kerak",
          "To'g'ri javob berilmagan",
          "Saytni dizaynini imkon qadar sodda ishlab chiqib aqliy bosimni kamaytirish kerak",
          "Ranglarni to'g'ri tanlash kerak. Masalan: qoraga oq rang shunga o'xshash ranglar tanlash kerak"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Gapirishda nuqsoni bor odamlar uchun qanday foydalanish imkoni yaratsak bo'ladi",
        "options": [
          "Chat botlar yaratish kerak",
          "Saytni dizaynini imkon qadar sodda ishlab chiqib aqliy bosimni kamaytirish kerak",
          "Ranglarni to'g'ri tanlash kerak. Masalan: qoraga oq rang shunga o'xshash ranglar tanlash kerak",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Nogiron insonlar uchun qanday foydalanish imkoniyati yaratsak bo'ladi.",
        "options": [
          "Imkon qadar AI qo'shish kerak shu bilan birga barcha muammolarni bitta tugma bilan hal qilishga harakat qilish kerak.",
          "Ranglarni to'g'ri tanlash kerak. Masalan: qoraga oq rang shunga o'xshash ranglar tanlash kerak",
          "Substiter qo'shish kerak",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Text tool dan foydalanish uchun tezkor klavish qaysi?",
        "options": [
          "T",
          "R",
          "O",
          "L"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Rectangle tool dan foydalanish uchun tezkor klavish qaysi?",
        "options": [
          "R",
          "T",
          "O",
          "L"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Ellipse Tool dan foydalanish uchun tezkor klavish qaysi?",
        "options": [
          "O",
          "R",
          "T",
          "L"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Line Tool dan foydalanish uchun tezkor klavish qaysi?",
        "options": [
          "L",
          "O",
          "R",
          "T"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Frame tool dan foydalanish uchun tezkor klavish qaysi?",
        "options": [
          "F",
          "L",
          "O",
          "T"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Layout Grids ko'rish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Shift+4",
          "Ctrl+Alt+4",
          "Shift+Alt+4",
          "Ctrl+4"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da layer lani ko'rish uchun (Show Layers) qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Alt+1",
          "Alt+2",
          "Alt+3",
          "Alt+4"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figmada komponentalarimizni ko'rish uchun (Show Components) qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Alt+2",
          "Alt+3",
          "Alt+1",
          "Alt+4"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figmada qo'shgan prototyplarimizni ko'rish uchun (Show Prototype Panel) qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Alt+9",
          "Alt+5",
          "Alt+8",
          "Alt+7"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figmada textni qalinlashtirish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+B",
          "Ctrl+I",
          "Ctrl+U",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni og'ma (italic) qib yozish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+I",
          "Ctrl+B",
          "Ctrl+U",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ga tag chiziq (underline) chizish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+U",
          "Ctrl+I",
          "Ctrl+B",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni chap tomonga tartiblash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+L",
          "Ctrl+Alt+C",
          "Ctrl+Alt+T",
          "Ctrl+Alt+R"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni o'ng tomonga tartiblash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+R",
          "Ctrl+Alt+L",
          "Ctrl+Alt+C",
          "Ctrl+Alt+T"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni o'rtaga (center) tartiblash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+T",
          "Ctrl+Alt+R",
          "Ctrl+Alt+C",
          "Ctrl+Alt+L"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da textni kontent bo'yicha bir xilda tartiblash uchun qaysi kalavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+J",
          "Ctrl+Alt+R",
          "Ctrl+Alt+C",
          "Ctrl+Alt+L"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da textni o'chamani kichiklashtirish yoki kattalashtirish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Shift+>, Ctrl+Shift+<",
          "Ctrl+Alt+>, Ctrl+Alt+<",
          "Shift+Alt+>, Shift+Alt<",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da textni harflarini orasidagi masofani kichiklashtirish yoki kattalashtirish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Alt+. va Alt+,",
          "Ctrl+. va Ctrl+,",
          "Shift+. va Shift+,",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni satrlari orasidagi masofani kichiklashtirish yoki kattalashtirish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Alt+Shift+> va Alt+Shift+<",
          "Alt+Ctrl+> va Alt+Ctrl+<",
          "Ctrl+Shift+> va Ctrl+Shift+<",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da Pen Tool dan foydalanish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "P",
          "R",
          "F",
          "O"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da elementlarni bir guruhga jamlash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+G",
          "Ctrl+C",
          "Ctrl+J",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da bir guruhga yig'ilgan elementlarni guruhdan chiqarish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Shift+G",
          "Shift+Ctrl+G",
          "Ctrl+G",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da elementlarni bir frem (frame) yig'ish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+G",
          "Alt+G",
          "Ctrl+Shift+G",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da elemenlarni duplikat (duplicate) qilish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+D",
          "Ctrl+K",
          "Ctrl+A",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da element yoki elementlar guruhlarini eksport qilish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Shift+E",
          "Ctrl+E",
          "Shift+E",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da elementlar guruharini qayta nomlash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+R",
          "Ctrl+C",
          "Ctrl+N",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Yangi kompanenta yaratish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+K",
          "Ctrl+Alt+J",
          "Ctrl+Alt+C",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish testida (Usability Test) ishtirokchi real hayotda bajarishi mumkin bo'lgan real harakatlar qaysi elementiga kiradi.",
        "options": [
          "Task",
          "Participant",
          "Facilitator",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "________ bu mahsulotning dastlabki bosqichdagi, arzon shakli. To'g'ri javobni tanlang.",
        "options": [
          "Prototip",
          "Axbarot arxitekturasi",
          "Sayt xaritasi",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Saytning axbarot tayanchi nima?",
        "options": [
          "Axbarot Arxitekturasi",
          "Navigatsiyalar",
          "Sayt xaritasi",
          "To'gri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni chap tomonga tartiblash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+Alt+L",
          "Ctrl+Alt+C",
          "Ctrl+Alt+T",
          "Ctrl+Alt+R"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da elementlarni bir guruhga jamlash uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+G",
          "Ctrl+C",
          "Ctrl+J",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "________ bu o'zaro tasir dizayni o'lchovi mahsulot mexanizmini o'z ichiga oladi: foydalanuvchilar veb-saytdagi harakatlarni qanday amalga oshiradilar. To'g'ri javobni tanlang.",
        "options": [
          "Behavior",
          "Time",
          "Visual Rep",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Foydalanish qulayligini (Usability) tekshirish turlari qaysilar?",
        "options": [
          "Barcha javoblar to'g'ri",
          "Qualitative, Quantitative",
          "Moderated Unmoderated",
          "In-Person, Remote"
        ],
        "correctAnswer": 0
      },
      {
        "type": "multiple-choice",
        "question": "Figma da text ni og'ma (italic) qib yozish uchun qaysi tezkor klavishdan foydalanamiz.",
        "options": [
          "Ctrl+I",
          "Ctrl+B",
          "Ctrl+U",
          "To'g'ri javob berilmagan"
        ],
        "correctAnswer": 0
      }
    ],
    "completed": false,
    "score": null
  }
];