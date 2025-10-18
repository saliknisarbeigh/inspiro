const inspiringQuotes = [
  {
    id: "1",
    text: "The best among you are those who have the best manners and character.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "2",
    text: "Do not lose hope, nor be sad. You will surely be superior if you are true believers.",
    author: "Quran 3:139",
    source: "Surah Al-Imran"
  },
  {
    id: "3",
    text: "The strongest among you is the one who controls his anger.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "4",
    text: "Allah does not burden a soul beyond that it can bear.",
    author: "Quran 2:286",
    source: "Surah Al-Baqarah"
  },
  {
    id: "5",
    text: "The believer is not the one who eats his fill when his neighbor beside him is hungry.",
    author: "Prophet Muhammad (PBUH)",
    source: "Al-Adab Al-Mufrad"
  },
  {
    id: "6",
    text: "After hardship comes ease.",
    author: "Quran 94:6",
    source: "Surah Ash-Sharh"
  },
  {
    id: "7",
    text: "Seek knowledge from the cradle to the grave.",
    author: "Prophet Muhammad (PBUH)",
    source: "Ibn Majah"
  },
  {
    id: "8",
    text: "Indeed, with hardship comes ease.",
    author: "Quran 94:5",
    source: "Surah Ash-Sharh"
  },
  {
    id: "9",
    text: "Actions are judged by intentions.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "10",
    text: "And Allah is with the patient.",
    author: "Quran 2:153",
    source: "Surah Al-Baqarah"
  },
  {
    id: "11",
    text: "None of you truly believes until he wishes for his brother what he wishes for himself.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "12",
    text: "So verily, with hardship, there is relief.",
    author: "Quran 94:5",
    source: "Surah Ash-Sharh"
  },
  {
    id: "13",
    text: "The most perfect believer in faith is the one whose character is finest.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "14",
    text: "Allah does not change the condition of a people until they change what is in themselves.",
    author: "Quran 13:11",
    source: "Surah Ar-Ra'd"
  },
  {
    id: "15",
    text: "The best of people are those that bring most benefit to the rest of mankind.",
    author: "Prophet Muhammad (PBUH)",
    source: "Daraqutni"
  },
  {
    id: "16",
    text: "And whoever relies upon Allah - then He is sufficient for him.",
    author: "Quran 65:3",
    source: "Surah At-Talaq"
  },
  {
    id: "17",
    text: "A person's true wealth is the good they do in this world.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "18",
    text: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    author: "Quran 13:11",
    source: "Surah Ar-Ra'd"
  },
  {
    id: "19",
    text: "The most beloved deeds to Allah are those that are consistent, even if they are small.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "20",
    text: "And seek help through patience and prayer.",
    author: "Quran 2:45",
    source: "Surah Al-Baqarah"
  },
  {
    id: "21",
    text: "Patience is the key to paradise.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "22",
    text: "So remember Me; I will remember you.",
    author: "Quran 2:152",
    source: "Surah Al-Baqarah"
  },
  {
    id: "23",
    text: "The best richness is the richness of the soul.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "24",
    text: "And Allah is the best of providers.",
    author: "Quran 62:11",
    source: "Surah Al-Jumu'ah"
  },
  {
    id: "25",
    text: "A good word is charity.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "26",
    text: "Indeed, Allah is with the righteous.",
    author: "Quran 29:69",
    source: "Surah Al-Ankabut"
  },
  {
    id: "27",
    text: "The best of you are those who are best to their families.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "28",
    text: "And whoever fears Allah - He will make for him a way out.",
    author: "Quran 65:2",
    source: "Surah At-Talaq"
  },
  {
    id: "29",
    text: "Do not look down upon any good deed, even if it is meeting your brother with a cheerful face.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "30",
    text: "And Allah will provide for him from where he does not expect.",
    author: "Quran 65:3",
    source: "Surah At-Talaq"
  },
  {
    id: "31",
    text: "The most excellent jihad is that for the conquest of self.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "32",
    text: "So verily, with the hardship, there is relief.",
    author: "Quran 94:6",
    source: "Surah Ash-Sharh"
  },
  {
    id: "33",
    text: "Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "34",
    text: "And Allah knows best what is good for you.",
    author: "Quran 2:216",
    source: "Surah Al-Baqarah"
  },
  {
    id: "35",
    text: "The best of you is the one who learns the Quran and teaches it.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "36",
    text: "Indeed, Allah is with the patient.",
    author: "Quran 8:46",
    source: "Surah Al-Anfal"
  },
  {
    id: "37",
    text: "The world is a prison for the believer and a paradise for the disbeliever.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "38",
    text: "And whoever puts their trust in Allah, then He will suffice them.",
    author: "Quran 65:3",
    source: "Surah At-Talaq"
  },
  {
    id: "39",
    text: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "40",
    text: "Allah does not waste the reward of those who do good.",
    author: "Quran 9:120",
    source: "Surah At-Tawbah"
  },
  {
    id: "41",
    text: "The best of you are those who are best to their wives.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "42",
    text: "And Allah is the best of planners.",
    author: "Quran 3:54",
    source: "Surah Al-Imran"
  },
  {
    id: "43",
    text: "Allah is more pleased with the repentance of His servant than one of you who finds his lost camel in the desert.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "44",
    text: "And whoever puts their trust in Allah, He will be enough for them.",
    author: "Quran 65:3",
    source: "Surah At-Talaq"
  },
  {
    id: "45",
    text: "The most complete believer in faith is the one with the best character.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "46",
    text: "Indeed, Allah is with the steadfast.",
    author: "Quran 2:153",
    source: "Surah Al-Baqarah"
  },
  {
    id: "47",
    text: "Whoever does not show mercy to people, Allah will not show mercy to him.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "48",
    text: "And Allah is the best helper.",
    author: "Quran 3:150",
    source: "Surah Al-Imran"
  },
  {
    id: "49",
    text: "The best charity is that given in Ramadan.",
    author: "Prophet Muhammad (PBUH)",
    source: "Tirmidhi"
  },
  {
    id: "50",
    text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    author: "Quran 2:152",
    source: "Surah Al-Baqarah"
  },
  {
    id: "51",
    text: "Allah says: I am as My servant thinks of Me.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "52",
    text: "Knowledge is a treasure and its key is questioning.",
    author: "Ali ibn Abi Talib (RA)",
    source: "Sahih Bukhari"
  },
  {
    id: "53",
    text: "The best among you in Islam are those who are best in character.",
    author: "Prophet Muhammad (PBUH)",
    source: "Abu Dawud"
  },
  {
    id: "54",
    text: "The best of deeds is that which is done consistently, even if it is small.",
    author: "Umar ibn al-Khattab (RA)",
    source: "Sahih Bukhari"
  },
  {
    id: "55",
    text: "Whoever guides someone to goodness will have a reward like the one who does it.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "56",
    text: "Hold yourself accountable before you are held accountable.",
    author: "Umar ibn al-Khattab (RA)",
    source: "Tirmidhi"
  },
  {
    id: "57",
    text: "The best of your leaders are those whom you love and who love you.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Muslim"
  },
  {
    id: "58",
    text: "The greatest truth is honesty, and the greatest falsehood is dishonesty.",
    author: "Abu Bakr as-Siddiq (RA)",
    source: "Sahih Bukhari"
  },
  {
    id: "59",
    text: "Allah does not burden a soul beyond that it can bear.",
    author: "Prophet Muhammad (PBUH)",
    source: "Sahih Bukhari"
  },
  {
    id: "60",
    text: "Knowledge without action is insanity, and action without knowledge is vanity.",
    author: "Ali ibn Abi Talib (RA)",
    source: "Tirmidhi"
  }
];

export default inspiringQuotes;
