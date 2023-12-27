const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  const users = [
    {
      "First Name [Required]": "Abel",
      "Last Name [Required]": "Adane",
      "Email Address [Required]": "abel.adane@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/14 20:10:22",
      "Email Usage [READ ONLY]": "0.25GB",
    },
    {
      "First Name [Required]": "Abenet",
      "Last Name [Required]": "Ashagre",
      "Email Address [Required]": "abenet.ashagre@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 18:47:44",
      "Email Usage [READ ONLY]": "0.01GB",
    },
    {
      "First Name [Required]": "Abigail",
      "Last Name [Required]": "Abebe",
      "Email Address [Required]": "abigail.abebe@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 03:50:20",
      "Email Usage [READ ONLY]": "3.56GB",
    },
    {
      "First Name [Required]": "Abraham",
      "Last Name [Required]": "Yonas",
      "Email Address [Required]": "abraham.yonas@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 01:30:32",
      "Email Usage [READ ONLY]": "0.27GB",
    },
    {
      "First Name [Required]": "Adeyemi Biodun",
      "Last Name [Required]": "Olanrewaju",
      "Email Address [Required]": "adeyemi.olanrewaju@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "2022/09/19 11:49:39",
      "Email Usage [READ ONLY]": "0.51GB",
    },
    {
      "First Name [Required]": "Adonai",
      "Last Name [Required]": "Nangui",
      "Email Address [Required]": "adonai.nangui@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/18 01:01:50",
      "Email Usage [READ ONLY]": "0.33GB",
    },
    {
      "First Name [Required]": "Amadou",
      "Last Name [Required]": "Daffe",
      "Email Address [Required]": "amadou@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 10:27:08",
      "Email Usage [READ ONLY]": "54.52GB",
    },
    {
      "First Name [Required]": "Amanuel",
      "Last Name [Required]": "Yitbarek",
      "Email Address [Required]": "amanuel.yitbarek@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 03:15:52",
      "Email Usage [READ ONLY]": "3.08GB",
    },
    {
      "First Name [Required]": "Amber ",
      "Last Name [Required]": "Amir Yusuf",
      "Email Address [Required]": "amber.yusuf@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/26 03:23:08",
      "Email Usage [READ ONLY]": "0.17GB",
    },
    {
      "First Name [Required]": "Andrew",
      "Last Name [Required]": "Gwadiva",
      "Email Address [Required]": "andrew.gwadiva@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "2023/01/28 00:00:59",
      "Email Usage [READ ONLY]": "0.01GB",
    },
    {
      "First Name [Required]": "Aristide A.",
      "Last Name [Required]": "Lavri",
      "Email Address [Required]": "aristide.lavri@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2022/05/31 10:15:46",
      "Email Usage [READ ONLY]": "0.58GB",
    },
    {
      "First Name [Required]": "b2",
      "Last Name [Required]": "d",
      "Email Address [Required]": "b2d@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/20 09:18:41",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Bakary",
      "Last Name [Required]": "Bamba",
      "Email Address [Required]": "bakary.bamba@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/17 16:21:33",
      "Email Usage [READ ONLY]": "1.27GB",
    },
    {
      "First Name [Required]": "Bamlak",
      "Last Name [Required]": "Getachew",
      "Email Address [Required]": "bamlak.getachew@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 00:54:07",
      "Email Usage [READ ONLY]": "1.12GB",
    },
    {
      "First Name [Required]": "Benjamin",
      "Last Name [Required]": "Gekara Mokaya",
      "Email Address [Required]": "benjamin.gekara@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 12:25:03",
      "Email Usage [READ ONLY]": "0.95GB",
    },
    {
      "First Name [Required]": "Bereket",
      "Last Name [Required]": "Taffese Lakew",
      "Email Address [Required]": "bereket.taffese@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 06:08:21",
      "Email Usage [READ ONLY]": "0.21GB",
    },
    {
      "First Name [Required]": "Berhan ",
      "Last Name [Required]": "Taye",
      "Email Address [Required]": "berhan.taye@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 00:06:02",
      "Email Usage [READ ONLY]": "0.63GB",
    },
    {
      "First Name [Required]": "Betelhem",
      "Last Name [Required]": "Tesfaye",
      "Email Address [Required]": "betelhem.tesfaye@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 03:16:46",
      "Email Usage [READ ONLY]": "1.47GB",
    },
    {
      "First Name [Required]": "Bethlehem",
      "Last Name [Required]": "Shewaye",
      "Email Address [Required]": "bethlehem.shewaye@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/23 12:31:43",
      "Email Usage [READ ONLY]": "0.98GB",
    },
    {
      "First Name [Required]": "Beverly ",
      "Last Name [Required]": "Fiona Achieng",
      "Email Address [Required]": "beverly.achieng@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 07:53:45",
      "Email Usage [READ ONLY]": "0.17GB",
    },
    {
      "First Name [Required]": "Biniam",
      "Last Name [Required]": "Asnake Kefale",
      "Email Address [Required]": "biniam.asnake@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/08 00:41:57",
      "Email Usage [READ ONLY]": "0.29GB",
    },
    {
      "First Name [Required]": "Biniyam ",
      "Last Name [Required]": "Ayele",
      "Email Address [Required]": "biniyam.ayele@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 01:34:03",
      "Email Usage [READ ONLY]": "0.2GB",
    },
    {
      "First Name [Required]": "Biruk",
      "Last Name [Required]": "Ewnetu",
      "Email Address [Required]": "biruk.ewnetu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 02:48:26",
      "Email Usage [READ ONLY]": "0.06GB",
    },
    {
      "First Name [Required]": "Black",
      "Last Name [Required]": "Panther",
      "Email Address [Required]": "blackpanther@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2021/07/19 07:26:21",
      "Email Usage [READ ONLY]": "0.23GB",
    },
    {
      "First Name [Required]": "Brooktawit",
      "Last Name [Required]": "Mulugeta",
      "Email Address [Required]": "brooktawit.mulugeta@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/24 21:38:08",
      "Email Usage [READ ONLY]": "2.06GB",
    },
    {
      "First Name [Required]": "Caroline",
      "Last Name [Required]": "Thande",
      "Email Address [Required]": "caroline.thande@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 00:02:00",
      "Email Usage [READ ONLY]": "8.58GB",
    },
    {
      "First Name [Required]": "Cloud",
      "Last Name [Required]": "Gebeya",
      "Email Address [Required]": "cloud@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/03 13:27:05",
      "Email Usage [READ ONLY]": "0.07GB",
    },
    {
      "First Name [Required]": "Dadja",
      "Last Name [Required]": "Matiasso Bassou",
      "Email Address [Required]": "dadja.matiasso@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 14:44:42",
      "Email Usage [READ ONLY]": "0.4GB",
    },
    {
      "First Name [Required]": "Dawit",
      "Last Name [Required]": "Anbesu",
      "Email Address [Required]": "dawit.anbesu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 00:12:46",
      "Email Usage [READ ONLY]": "17.52GB",
    },
    {
      "First Name [Required]": "Derartu",
      "Last Name [Required]": "Dagne",
      "Email Address [Required]": "derartu.dagne@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 01:58:34",
      "Email Usage [READ ONLY]": "0.01GB",
    },
    {
      "First Name [Required]": "Dereje",
      "Last Name [Required]": "Hinsermu",
      "Email Address [Required]": "dereje.hinsermu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 23:21:25",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Edgar",
      "Last Name [Required]": "Macharia",
      "Email Address [Required]": "edgar.macharia@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 01:10:57",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Edmond",
      "Last Name [Required]": "Mebratu",
      "Email Address [Required]": "edmond.mebratu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 23:47:14",
      "Email Usage [READ ONLY]": "0.25GB",
    },
    {
      "First Name [Required]": "Edwin",
      "Last Name [Required]": "Ndonga",
      "Email Address [Required]": "edwin.ndonga@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 01:34:46",
      "Email Usage [READ ONLY]": "1.17GB",
    },
    {
      "First Name [Required]": "Eleni",
      "Last Name [Required]": "Belete",
      "Email Address [Required]": "eleni.belete@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 09:13:11",
      "Email Usage [READ ONLY]": "1.01GB",
    },
    {
      "First Name [Required]": "Elijah",
      "Last Name [Required]": "Nyaema",
      "Email Address [Required]": "elijah.nyaema@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 00:36:07",
      "Email Usage [READ ONLY]": "5.39GB",
    },
    {
      "First Name [Required]": "Elizabeth",
      "Last Name [Required]": "Jepchumba",
      "Email Address [Required]": "elizabeth.jepchumba@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/13 03:57:38",
      "Email Usage [READ ONLY]": "0.05GB",
    },
    {
      "First Name [Required]": "Elshadaiy",
      "Last Name [Required]": "Tadele",
      "Email Address [Required]": "elshadaiy.tadele@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/12 22:18:59",
      "Email Usage [READ ONLY]": "0.97GB",
    },
    {
      "First Name [Required]": "Elshaday",
      "Last Name [Required]": "Endale",
      "Email Address [Required]": "elshaday.endale@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 02:33:30",
      "Email Usage [READ ONLY]": "4.88GB",
    },
    {
      "First Name [Required]": "Emnet",
      "Last Name [Required]": "Biruk",
      "Email Address [Required]": "emnet.biruk@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 23:41:48",
      "Email Usage [READ ONLY]": "3.38GB",
    },
    {
      "First Name [Required]": "Ephrata",
      "Last Name [Required]": "Dereje",
      "Email Address [Required]": "ephrata.dereje@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/24 23:49:18",
      "Email Usage [READ ONLY]": "9.77GB",
    },
    {
      "First Name [Required]": "Ermias",
      "Last Name [Required]": "Tefera",
      "Email Address [Required]": "ermias.tefera@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 23:12:11",
      "Email Usage [READ ONLY]": "0.28GB",
    },
    {
      "First Name [Required]": "Ermias",
      "Last Name [Required]": "Mekonnnen",
      "Email Address [Required]": "ermias.mekonnen@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 23:55:35",
      "Email Usage [READ ONLY]": "1.86GB",
    },
    {
      "First Name [Required]": "Ermias",
      "Last Name [Required]": "Mulugeta",
      "Email Address [Required]": "ermias.mulugeta@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 00:44:09",
      "Email Usage [READ ONLY]": "3.17GB",
    },
    {
      "First Name [Required]": "Eskedar",
      "Last Name [Required]": "Desalegn",
      "Email Address [Required]": "eskedar.desalegn@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 22:27:01",
      "Email Usage [READ ONLY]": "1.72GB",
    },
    {
      "First Name [Required]": "Evalyne",
      "Last Name [Required]": "Wanjiru Kamande",
      "Email Address [Required]": "evalyne.wanjiru@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/07 00:02:34",
      "Email Usage [READ ONLY]": "1.42GB",
    },
    {
      "First Name [Required]": "Eyerusalem",
      "Last Name [Required]": "Tesfaw",
      "Email Address [Required]": "eyerusalem.tesfaw@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 01:04:35",
      "Email Usage [READ ONLY]": "0.18GB",
    },
    {
      "First Name [Required]": "Ezra",
      "Last Name [Required]": "Million",
      "Email Address [Required]": "ezra.million@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 02:16:12",
      "Email Usage [READ ONLY]": "2.01GB",
    },
    {
      "First Name [Required]": "Fasika",
      "Last Name [Required]": "Worku",
      "Email Address [Required]": "fasika.worku@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/09/22 20:47:10",
      "Email Usage [READ ONLY]": "0.05GB",
    },
    {
      "First Name [Required]": "Fethi",
      "Last Name [Required]": "Abdullahi",
      "Email Address [Required]": "fethi.abdullahi@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/19 00:16:57",
      "Email Usage [READ ONLY]": "0.18GB",
    },
    {
      "First Name [Required]": "Feven",
      "Last Name [Required]": "Tsegaye",
      "Email Address [Required]": "feven.tsegaye@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 03:01:15",
      "Email Usage [READ ONLY]": "2.75GB",
    },
    {
      "First Name [Required]": "Florence",
      "Last Name [Required]": "Wairimu",
      "Email Address [Required]": "florence.wairimu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/23 00:16:44",
      "Email Usage [READ ONLY]": "1.4GB",
    },
    {
      "First Name [Required]": "Foday",
      "Last Name [Required]": "Dampha",
      "Email Address [Required]": "foday.dampha@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "2023/09/04 02:56:15",
      "Email Usage [READ ONLY]": "0.12GB",
    },
    {
      "First Name [Required]": "G-Help",
      "Last Name [Required]": "Team",
      "Email Address [Required]": "g-help@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/13 03:03:34",
      "Email Usage [READ ONLY]": "0.07GB",
    },
    {
      "First Name [Required]": "Gebeya",
      "Last Name [Required]": "Careers",
      "Email Address [Required]": "careers@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/24 01:22:11",
      "Email Usage [READ ONLY]": "2.46GB",
    },
    {
      "First Name [Required]": "Gebeya",
      "Last Name [Required]": "Staffing",
      "Email Address [Required]": "gstaffing@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/09/07 01:17:51",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Gebeya",
      "Last Name [Required]": "Sales",
      "Email Address [Required]": "sales@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/07 04:38:35",
      "Email Usage [READ ONLY]": "0.06GB",
    },
    {
      "First Name [Required]": "Gebeya",
      "Last Name [Required]": "Talent",
      "Email Address [Required]": "talent@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/07 07:48:53",
      "Email Usage [READ ONLY]": "1.77GB",
    },
    {
      "First Name [Required]": "Gebeya",
      "Last Name [Required]": "etmnp",
      "Email Address [Required]": "etmnp@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2022/03/03 05:37:17",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "GPM",
      "Last Name [Required]": "Subscriptions",
      "Email Address [Required]": "gpm.subscriptions@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/07 23:44:03",
      "Email Usage [READ ONLY]": "0.01GB",
    },
    {
      "First Name [Required]": "Hailemichael",
      "Last Name [Required]": "Derecha",
      "Email Address [Required]": "hailemichael.derecha@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/13 04:28:27",
      "Email Usage [READ ONLY]": "10.75GB",
    },
    {
      "First Name [Required]": "Hana",
      "Last Name [Required]": "Wujira",
      "Email Address [Required]": "hana.wujira@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/19 00:13:46",
      "Email Usage [READ ONLY]": "0.32GB",
    },
    {
      "First Name [Required]": "Hawariyaw",
      "Last Name [Required]": "Pawlos",
      "Email Address [Required]": "hawariyaw.pawlos@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 08:00:34",
      "Email Usage [READ ONLY]": "1.0GB",
    },
    {
      "First Name [Required]": "Hemen",
      "Last Name [Required]": "Tilahun",
      "Email Address [Required]": "hemen.tilahun@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 01:30:39",
      "Email Usage [READ ONLY]": "0.61GB",
    },
    {
      "First Name [Required]": "Henok",
      "Last Name [Required]": "Sisay",
      "Email Address [Required]": "henock.sisay@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 00:15:11",
      "Email Usage [READ ONLY]": "0.29GB",
    },
    {
      "First Name [Required]": "Hiruy",
      "Last Name [Required]": "Amanuel",
      "Email Address [Required]": "hiruy@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/04/19 04:13:10",
      "Email Usage [READ ONLY]": "8.04GB",
    },
    {
      "First Name [Required]": "Info",
      "Last Name [Required]": "Gebeya",
      "Email Address [Required]": "info@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/18 05:03:49",
      "Email Usage [READ ONLY]": "2.27GB",
    },
    {
      "First Name [Required]": "Ismael",
      "Last Name [Required]": "Kedir",
      "Email Address [Required]": "ismael.kedir@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/07 04:05:19",
      "Email Usage [READ ONLY]": "1.14GB",
    },
    {
      "First Name [Required]": "Joy-Anne",
      "Last Name [Required]": "Wanza",
      "Email Address [Required]": "joy-anne.wanza@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 23:13:01",
      "Email Usage [READ ONLY]": "4.03GB",
    },
    {
      "First Name [Required]": "Kaleab",
      "Last Name [Required]": "Girma",
      "Email Address [Required]": "kaleab.girma@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 11:46:01",
      "Email Usage [READ ONLY]": "3.91GB",
    },
    {
      "First Name [Required]": "Kalid",
      "Last Name [Required]": "Shikur",
      "Email Address [Required]": "kalid.shikur@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 01:06:34",
      "Email Usage [READ ONLY]": "0.61GB",
    },
    {
      "First Name [Required]": "Kibrom",
      "Last Name [Required]": "Gebreselasie",
      "Email Address [Required]": "kibrom.gebreselasie@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 03:04:47",
      "Email Usage [READ ONLY]": "0.38GB",
    },
    {
      "First Name [Required]": "Kidist",
      "Last Name [Required]": "Gebreamlak",
      "Email Address [Required]": "kidist.gebreamlak@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/15 03:12:18",
      "Email Usage [READ ONLY]": "0.02GB",
    },
    {
      "First Name [Required]": "Kossi",
      "Last Name [Required]": "Selom Banybah",
      "Email Address [Required]": "kossi.banybah@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 01:28:42",
      "Email Usage [READ ONLY]": "5.75GB",
    },
    {
      "First Name [Required]": "Lamoussa",
      "Last Name [Required]": "Tapsoba",
      "Email Address [Required]": "lamoussa.tapsoba@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "2023/10/03 06:58:06",
      "Email Usage [READ ONLY]": "0.12GB",
    },
    {
      "First Name [Required]": "Leul",
      "Last Name [Required]": "Girma",
      "Email Address [Required]": "leul.girma@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 17:45:51",
      "Email Usage [READ ONLY]": "25.94GB",
    },
    {
      "First Name [Required]": "Leul",
      "Last Name [Required]": "Fanuel",
      "Email Address [Required]": "leul.fanuel@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 00:10:56",
      "Email Usage [READ ONLY]": "0.29GB",
    },
    {
      "First Name [Required]": "Lidya",
      "Last Name [Required]": "Mitiku",
      "Email Address [Required]": "lidya.mitiku@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/16 12:38:56",
      "Email Usage [READ ONLY]": "0.06GB",
    },
    {
      "First Name [Required]": "Linda",
      "Last Name [Required]": "Hagos",
      "Email Address [Required]": "linda.hagos@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 01:33:42",
      "Email Usage [READ ONLY]": "0.27GB",
    },
    {
      "First Name [Required]": "Louis",
      "Last Name [Required]": "Onyango Owoko",
      "Email Address [Required]": "louis.owoko@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 00:02:39",
      "Email Usage [READ ONLY]": "7.15GB",
    },
    {
      "First Name [Required]": "Mahlet",
      "Last Name [Required]": "Tamene",
      "Email Address [Required]": "mahlet.tamene@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 03:33:06",
      "Email Usage [READ ONLY]": "12.06GB",
    },
    {
      "First Name [Required]": "Mansour",
      "Last Name [Required]": "Fall",
      "Email Address [Required]": "mansour.fall@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 07:31:20",
      "Email Usage [READ ONLY]": "3.93GB",
    },
    {
      "First Name [Required]": "Marie",
      "Last Name [Required]": "Ndeda",
      "Email Address [Required]": "marie.ndeda@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 00:51:35",
      "Email Usage [READ ONLY]": "5.65GB",
    },
    {
      "First Name [Required]": "Marius",
      "Last Name [Required]": "Koudou",
      "Email Address [Required]": "marius.koudou@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/12 01:01:12",
      "Email Usage [READ ONLY]": "0.91GB",
    },
    {
      "First Name [Required]": "Martin",
      "Last Name [Required]": "Ndlovu",
      "Email Address [Required]": "martin.ndlovu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 08:37:07",
      "Email Usage [READ ONLY]": "1.38GB",
    },
    {
      "First Name [Required]": "Mekdes",
      "Last Name [Required]": "Ephrem",
      "Email Address [Required]": "mekdes.ephrem@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 08:07:54",
      "Email Usage [READ ONLY]": "2.42GB",
    },
    {
      "First Name [Required]": "Melat",
      "Last Name [Required]": "Belayneh",
      "Email Address [Required]": "melat.belayneh@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "Never logged in",
      "Email Usage [READ ONLY]": "0.01GB",
    },
    {
      "First Name [Required]": "Menna",
      "Last Name [Required]": "Garedew",
      "Email Address [Required]": "menna.tafesse@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/23 02:30:30",
      "Email Usage [READ ONLY]": "5.67GB",
    },
    {
      "First Name [Required]": "Meriem",
      "Last Name [Required]": "Abubeker",
      "Email Address [Required]": "meriem.abubeker@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 11:28:30",
      "Email Usage [READ ONLY]": "0.24GB",
    },
    {
      "First Name [Required]": "Meron",
      "Last Name [Required]": "Desta",
      "Email Address [Required]": "meron.desta@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/13 00:42:24",
      "Email Usage [READ ONLY]": "3.0GB",
    },
    {
      "First Name [Required]": "Mesirat",
      "Last Name [Required]": "Gebeya",
      "Email Address [Required]": "mesirat@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 02:53:02",
      "Email Usage [READ ONLY]": "0.59GB",
    },
    {
      "First Name [Required]": "Michael",
      "Last Name [Required]": "Ebuka",
      "Email Address [Required]": "michael.ebuka@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 02:38:07",
      "Email Usage [READ ONLY]": "0.03GB",
    },
    {
      "First Name [Required]": "Miheret",
      "Last Name [Required]": "Antene",
      "Email Address [Required]": "miheret.antene@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 23:39:11",
      "Email Usage [READ ONLY]": "0.37GB",
    },
    {
      "First Name [Required]": "Millicent",
      "Last Name [Required]": "Kariuki",
      "Email Address [Required]": "millicent.kariuki@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/15 06:39:39",
      "Email Usage [READ ONLY]": "0.97GB",
    },
    {
      "First Name [Required]": "Mobile",
      "Last Name [Required]": "Gebeya",
      "Email Address [Required]": "mobile@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 01:26:39",
      "Email Usage [READ ONLY]": "0.1GB",
    },
    {
      "First Name [Required]": "Mohammed",
      "Last Name [Required]": "Burahaba",
      "Email Address [Required]": "mohammed.burahaba@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 06:03:07",
      "Email Usage [READ ONLY]": "0.12GB",
    },
    {
      "First Name [Required]": "Monalisa",
      "Last Name [Required]": "Haile",
      "Email Address [Required]": "monalisa.haile@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 03:28:16",
      "Email Usage [READ ONLY]": "2.04GB",
    },
    {
      "First Name [Required]": "Naol",
      "Last Name [Required]": "Kefyalew",
      "Email Address [Required]": "naol.kefyalew@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 06:50:04",
      "Email Usage [READ ONLY]": "0.32GB",
    },
    {
      "First Name [Required]": "Nathnael",
      "Last Name [Required]": "Aberra",
      "Email Address [Required]": "nathnael.aberra@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/18 23:39:47",
      "Email Usage [READ ONLY]": "1.48GB",
    },
    {
      "First Name [Required]": "Nazrawit",
      "Last Name [Required]": "Birhanu",
      "Email Address [Required]": "nazrawit.birhanu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 23:04:26",
      "Email Usage [READ ONLY]": "3.94GB",
    },
    {
      "First Name [Required]": "Nebiyou",
      "Last Name [Required]": "Yirga",
      "Email Address [Required]": "nebiyou.yirga@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/06 23:28:03",
      "Email Usage [READ ONLY]": "0.04GB",
    },
    {
      "First Name [Required]": "no-",
      "Last Name [Required]": "reply",
      "Email Address [Required]": "no-reply@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/11/13 21:59:26",
      "Email Usage [READ ONLY]": "0.21GB",
    },
    {
      "First Name [Required]": "Obinna",
      "Last Name [Required]": "Obijuru",
      "Email Address [Required]": "obinna.obijuru@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/08/01 02:55:30",
      "Email Usage [READ ONLY]": "0.17GB",
    },
    {
      "First Name [Required]": "Ojeuna",
      "Last Name [Required]": "Mekconenn",
      "Email Address [Required]": "ojeuna.mekconenn@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/09/18 23:02:59",
      "Email Usage [READ ONLY]": "0.05GB",
    },
    {
      "First Name [Required]": "Olamide",
      "Last Name [Required]": "Egbayelo",
      "Email Address [Required]": "olamide.egbayelo@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2022/12/14 04:03:12",
      "Email Usage [READ ONLY]": "0.84GB",
    },
    {
      "First Name [Required]": "Olanrewaju ",
      "Last Name [Required]": "Oyinbooke",
      "Email Address [Required]": "olanrewaju.oyinbooke@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 00:24:27",
      "Email Usage [READ ONLY]": "0.09GB",
    },
    {
      "First Name [Required]": "Purity",
      "Last Name [Required]": "Kimani",
      "Email Address [Required]": "purity@gebeya.com",
      "Status [READ ONLY]": "Suspended",
      "Last Sign In [READ ONLY]": "2022/01/19 11:38:00",
      "Email Usage [READ ONLY]": "0.49GB",
    },
    {
      "First Name [Required]": "Rahel ",
      "Last Name [Required]": "Bekele",
      "Email Address [Required]": "rahel.bekele@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 23:05:17",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Rebekah",
      "Last Name [Required]": "Gebre Tsadik",
      "Email Address [Required]": "becky.gebretsadik@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/02 01:18:15",
      "Email Usage [READ ONLY]": "26.93GB",
    },
    {
      "First Name [Required]": "Richard",
      "Last Name [Required]": "Magu",
      "Email Address [Required]": "richard.magu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/18 09:00:47",
      "Email Usage [READ ONLY]": "6.8GB",
    },
    {
      "First Name [Required]": "Ruth",
      "Last Name [Required]": "Solomon",
      "Email Address [Required]": "ruth.solomon@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/15 03:17:46",
      "Email Usage [READ ONLY]": "0.3GB",
    },
    {
      "First Name [Required]": "Saba",
      "Last Name [Required]": "Malede",
      "Email Address [Required]": "saba.zewdu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/14 23:07:42",
      "Email Usage [READ ONLY]": "2.55GB",
    },
    {
      "First Name [Required]": "Samuel",
      "Last Name [Required]": "Wondimu",
      "Email Address [Required]": "samuel.wondimu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 03:43:53",
      "Email Usage [READ ONLY]": "0.06GB",
    },
    {
      "First Name [Required]": "Seblewengel",
      "Last Name [Required]": "Debebe",
      "Email Address [Required]": "seblewengel.debebe@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 23:34:10",
      "Email Usage [READ ONLY]": "0.68GB",
    },
    {
      "First Name [Required]": "Seblewongel",
      "Last Name [Required]": "Goshu",
      "Email Address [Required]": "seblewongel.goshu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 21:45:05",
      "Email Usage [READ ONLY]": "0.48GB",
    },
    {
      "First Name [Required]": "Selam",
      "Last Name [Required]": "Degefu",
      "Email Address [Required]": "selam.degefu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/15 07:01:00",
      "Email Usage [READ ONLY]": "0.27GB",
    },
    {
      "First Name [Required]": "Sifan",
      "Last Name [Required]": "Tilahun",
      "Email Address [Required]": "sifan.tilahun@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 23:33:59",
      "Email Usage [READ ONLY]": "0.11GB",
    },
    {
      "First Name [Required]": "Simon",
      "Last Name [Required]": "Yemaneh",
      "Email Address [Required]": "simon.yemaneh@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 01:29:10",
      "Email Usage [READ ONLY]": "0.12GB",
    },
    {
      "First Name [Required]": "social",
      "Last Name [Required]": "gebeya",
      "Email Address [Required]": "social@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 02:36:09",
      "Email Usage [READ ONLY]": "1.4GB",
    },
    {
      "First Name [Required]": "Talent",
      "Last Name [Required]": "Ops",
      "Email Address [Required]": "talentops@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/21 00:30:19",
      "Email Usage [READ ONLY]": "0.44GB",
    },
    {
      "First Name [Required]": "Teka",
      "Last Name [Required]": "Cherenet",
      "Email Address [Required]": "teka.cherenet@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 05:28:34",
      "Email Usage [READ ONLY]": "13.68GB",
    },
    {
      "First Name [Required]": "Tesfaye",
      "Last Name [Required]": "Alemayehu",
      "Email Address [Required]": "tesfaye.alemayehu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 02:31:47",
      "Email Usage [READ ONLY]": "0.0GB",
    },
    {
      "First Name [Required]": "Thierno",
      "Last Name [Required]": "Niang",
      "Email Address [Required]": "thierno.niang@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 13:23:44",
      "Email Usage [READ ONLY]": "12.04GB",
    },
    {
      "First Name [Required]": "Tigist",
      "Last Name [Required]": "Shiferaw",
      "Email Address [Required]": "tigist.tarekegne@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/26 01:13:41",
      "Email Usage [READ ONLY]": "0.95GB",
    },
    {
      "First Name [Required]": "Tonny ",
      "Last Name [Required]": "Mutai",
      "Email Address [Required]": "tonny.mutai@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/14 04:27:05",
      "Email Usage [READ ONLY]": "0.58GB",
    },
    {
      "First Name [Required]": "Training",
      "Last Name [Required]": "Gebeya",
      "Email Address [Required]": "training@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/14 04:03:07",
      "Email Usage [READ ONLY]": "2.34GB",
    },
    {
      "First Name [Required]": "Tsion",
      "Last Name [Required]": "Alemayehu Assefa",
      "Email Address [Required]": "tsion.alemayehu@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/24 22:51:42",
      "Email Usage [READ ONLY]": "0.39GB",
    },
    {
      "First Name [Required]": "Wiyaou  ",
      "Last Name [Required]": "Begbessou",
      "Email Address [Required]": "wiyaou.begbessou@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/18 01:04:34",
      "Email Usage [READ ONLY]": "0.1GB",
    },
    {
      "First Name [Required]": "Wycliffe",
      "Last Name [Required]": "Orao",
      "Email Address [Required]": "wycliffe.orao@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/20 02:33:29",
      "Email Usage [READ ONLY]": "1.27GB",
    },
    {
      "First Name [Required]": "Yafet",
      "Last Name [Required]": "Mered",
      "Email Address [Required]": "yafet.mered@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/25 11:54:37",
      "Email Usage [READ ONLY]": "1.98GB",
    },
    {
      "First Name [Required]": "Yonathan",
      "Last Name [Required]": "Tesfaye",
      "Email Address [Required]": "yonathan.tesfaye@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/22 05:12:20",
      "Email Usage [READ ONLY]": "4.99GB",
    },
    {
      "First Name [Required]": "Youssef",
      "Last Name [Required]": "Destefani",
      "Email Address [Required]": "youssef.destefani@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/14 05:54:58",
      "Email Usage [READ ONLY]": "0.26GB",
    },
    {
      "First Name [Required]": "Zacharias ",
      "Last Name [Required]": "Njue",
      "Email Address [Required]": "zacharias.njue@gebeya.com",
      "Status [READ ONLY]": "Active",
      "Last Sign In [READ ONLY]": "2023/12/15 00:42:41",
      "Email Usage [READ ONLY]": "0.06GB",
    },
  ];
  const employeeEmails = users.map(
    ({ "Email Address [Required]": email }) => email
  );

  res.send(employeeEmails);
});

module.exports = router;
