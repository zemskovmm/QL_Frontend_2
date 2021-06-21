import { FooterDataDto } from "src/interfaces/footerDataDto";

const footerData: FooterDataDto = {
  ru: {
    socials: [
      {
        url: "https://www.youtube.com/channel/UCEfRnfb8l-Wp7WXHkG-gUZA",
        title: "youtube",
      },
      {
        url:
          "https://www.google.com/maps/place/Quartier+Latin/@48.8697751,2.3483846,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x19b7799162dd9861!8m2!3d48.8697751!4d2.3505733?hl=ru&authuser=1",
        title: "G+",
      },
      {
        title: "linkedIn",
        url: "https://fr.linkedin.com/in/quartier-latin-0b9ba084",
      },
      {
        url: "https://www.instagram.com/quartierlatinru/",
        title: "instagram",
      },
      {
        title: "telegram",
        url: "https://t.me/quartierlatinru",
      },
      {
        url: "https://vk.com/quartierlatinru",
        title: "vk",
      },
      {
        url: "https://www.facebook.com/QuartierLatinRU/",
        title: "facebook",
      },
      {
        url: "https://twitter.com/quartierlatinru",
        title: "twitter",
      },
    ],
    headLinks: [
      {
        icon: "/images/icons/chain.svg",
        link: {
          title: "Для партнёров",
          url: "/ru/dlja-partnerov",
        },
      },
      {
        icon: "/images/icons/equals.svg",
        link: {
          title: "О компании",
          url: "/ru/o-kompanii",
        },
      },
      {
        icon: "/images/icons/information.svg",
        link: {
          url: "/ru/faq",
          title: "FAQ",
        },
      },
    ],
    writeUs: "НАПИСАТЬ НАМ",
    links: [
      {
        group: {
          url: "/ru/education",
          title: "Обучение",
        },
        items: [
          {
            url: "/ru/dopolnitelnye-uslugi/zaverennyj-perevod-dokumentov",
            title: "Заверенный перевод документов",
          },
          {
            url: "/ru/dopolnitelnye-uslugi/sostavlenie-i-perevod-rezjume",
            title: "Помощь в составлении и переводе резюме",
          },
          {
            title: "Помощь в составлении и переводе мотивационных писем",
            url: "/ru/dopolnitelnye-uslugi/sostavlenie-motivatsionnyh-pisem",
          },
          {
            url: "/ru/dopolnitelnye-uslugi/podgotovka-k-sobesedovaniju-na-postuplenie",
            title: "Подготовка к собеседованию для поступления в ВУЗ",
          },
          {
            title: "Подбор и запись на стипендию",
            url: "/ru/dopolnitelnye-uslugi/podbor-i-zapis-na-stipendiju",
          },
          {
            url: "/ru/dopolnitelnye-uslugi/zapolnenie-anket",
            title: "Заполнение анкет",
          },
          {
            title: "Консультации",
            url: "/ru/dopolnitelnye-uslugi/konsultatsii",
          },
          {
            url: "/ru/predlozhenija/stoimost-uslug",
            title: "Пакеты услуг по поступлению",
          },
        ],
      },
      {
        items: [
          {
            title: "Проживание в семьях",
            url: "/ru/arenda-zhilja/prozhivanie-v-semjah",
          },
          {
            url: "/ru/arenda-zhilja/sovmestnaja-arenda-zhilja",
            title: "Совместная аренда жилья",
          },
          {
            url: "/ru/arenda-zhilja/arenda-kvartir",
            title: "Аренда квартир",
          },
          {
            url: "/ru/arenda-zhilja/studencheskie-rezidentsii",
            title: "Студенческие резиденции",
          },
          {
            title: "Покупка недвижимости",
            url: "/ru/arenda-zhilja/pokupka-nedvizhimosti",
          },
          {
            url: "/ru/arenda-zhilja/oformlenie-dokumentov-na-prozhivanie",
            title: "Оформление проживания",
          },
          {
            title: "Подключение бытовых коммуникаций",
            url: "/ru/arenda-zhilja/podkljuchenie-bytovyh-kommunikatsij",
          },
          {
            title: "Оформление субсидий CAF",
            url: "/ru/arenda-zhilja/oformlenie-nalogovogo-vycheta-caf",
          },
          {
            title: "Поиск гаранта во Франции",
            url: "/ru/arenda-zhilja/poisk-garanta-vo-frantsii",
          },
        ],
        group: {
          url: "/ru/arenda-zhilja",
          title: "Аренда жилья",
        },
      },
      {
        group: {
          title: "Изучение языка",
          url: "/ru/izuchenie-jazyka",
        },
        items: [
          {
            url: "/ru/izuchenie-jazyka/jazykovye-shkoly",
            title: "Языковые школы",
          },
          {
            url: "/ru/izuchenie-jazyka/frantsuzskij-v-universitetah",
            title: "Французский в университетах",
          },
          {
            url: "/ru/izuchenie-jazyka/frantsuzskij-po-skype",
            title: "Французский по Skype",
          },
          {
            url: "/ru/izuchenie-jazyka/individualnye-zanjatija",
            title: "Индивидуальные занятия",
          },
          {
            title: "Программы AU-Pair",
            url: "/ru/izuchenie-jazyka/programmy-au-pair",
          },
          {
            title: "Оплачиваемые стажировки",
            url: "/ru/izuchenie-jazyka/work-and-travel",
          },
          {
            url: "/ru/izuchenie-jazyka/professionalnye-stazhirovki",
            title: "Профессиональные стажировки",
          },
          {
            title: "Vacances-travail: работа во Франции",
            url: "/ru/izuchenie-jazyka/vacances-travail",
          },
        ],
      },
      {
        items: [
          {
            title: "Приглашения для студентов и родителей",
            url: "/ru/vizovaja-podderzhka/priglashenija-dlja-studentov-i-roditelej",
          },
          {
            title: "Помощь в составлении сопроводительных писем",
            url: "/ru/vizovaja-podderzhka/sostavlenie-soprovoditelnyh-pisem",
          },
          {
            title: "Поиск опекуна для несовершеннолетних",
            url: "/ru/vizovaja-podderzhka/poisk-opekuna-dlja-nesovershennoletnih",
          },
          {
            title: "Проверка документов перед подачей",
            url: "/ru/vizovaja-podderzhka/proverka-dokumentov-pered-podachej",
          },
          {
            title: "Подготовка к собеседованию для получения визы",
            url: "/ru/vizovaja-podderzhka/podgotovka-k-sobesedovaniju-na-vizu",
          },
          {
            url: "/ru/vizovaja-podderzhka/poluchenie-vizy-posle-otkaza",
            title: "Получение визы после отказа",
          },
          {
            title: "Продление студенческой визы",
            url: "/ru/vizovaja-podderzhka/prodlenie-studencheskoj-vizy",
          },
          {
            title: "Пакеты помощи с визой",
            url: "/ru/vizovaja-podderzhka/help-with-visa-package",
          },
        ],
        group: {
          title: "Визовая поддержка",
          url: "/ru/vizovaja-podderzhka",
        },
      },
      {
        group: {
          title: "Адаптация на месте",
          url: "/ru/uslugi-po-adaptatsii",
        },
        items: [
          {
            title: "Открытие банковского счета",
            url: "/ru/uslugi-po-adaptatsii/otkrytie-bankovskogo-scheta",
          },
          {
            url: "/ru/uslugi-po-adaptatsii/poluchenie-meditsinskoj-strahovki",
            title: "Получение мед.страховки",
          },
          {
            title: "Процедура OFII",
            url: "/ru/vizovaja-podderzhka/protsedura-ofii",
          },
          {
            url: "/ru/uslugi-po-adaptatsii/pervyj-vizit-k-vrachu",
            title: "Первый визит к врачу",
          },
          {
            title: "Сотовая связь",
            url: "/ru/uslugi-po-adaptatsii/sotovaja-svjaz",
          },
          {
            url: "/ru/uslugi-po-adaptatsii/proezdnoj",
            title: "Проездной",
          },
          {
            title: "Пакеты услуг по адаптации",
            url: "/ru/uslugi-po-adaptatsii/pakety-uslug-po-adaptatsii",
          },
        ],
      },
    ],
  },
  en: {
    socials: [
      {
        url: "",
        title: "",
      },
      {
        url: "https://plus.google.com/u/0/113429684776507604204",
        title: "G+",
      },
      {
        url: "https://fr.linkedin.com/in/quartier-latin-0b9ba084",
        title: "linkedIn",
      },
      {
        url: "https://www.instagram.com/quartierlatinen/",
        title: "instagram",
      },
      {
        url: "",
        title: "",
      },
      {
        url: "https://vk.com/quartierlatinru",
        title: "vk",
      },
      {
        url: "https://www.facebook.com/QuartierLatinEN/",
        title: "facebook",
      },
      {
        title: "twitter",
        url: "https://twitter.com/QuartierLatinRU",
      },
    ],
    headLinks: [
      {
        icon: "/images/icons/chain.svg",
        link: {
          url: "/en/dlja-partnerov",
          title: "FOR PARTNERS",
        },
      },
      {
        icon: "/images/icons/equals.svg",
        link: {
          url: "/en/o-kompanii",
          title: "ABOUT US",
        },
      },
      {
        icon: "/images/icons/information.svg",
        link: {
          title: "FAQ",
          url: "/en/faq",
        },
      },
    ],
    writeUs: "WRITE TO US",
    links: [
      {
        group: {
          title: "EDUCATION",
          url: "/en/education",
        },
        items: [
          {
            title: "Certified translation of documents",
            url: "/en/dopolnitelnye-uslugi/certified-translation-of-documents",
          },
          {
            url: "/en/dopolnitelnye-uslugi/assistance-in-preparing-and-translating-your-cv",
            title: "Assistance in preparing and translating your CV",
          },
          {
            url: "/en/dopolnitelnye-uslugi/assistance-in-preparing-and-writing-motivation-letters",
            title: "Assistance in preparing and writing motivation letters",
          },
          {
            url: "/en/dopolnitelnye-uslugi/selecting-and-applying-for-a-scholarship",
            title: "Selecting and applying for a scholarship",
          },
          {
            title: "Preparing for a university interview",
            url: "/en/dopolnitelnye-uslugi/preparing-for-a-university-interview",
          },
          {
            url: "/en/dopolnitelnye-uslugi/filling-in-the-application-form",
            title: "Filling in the application form",
          },
          {
            title: "Consultations",
            url: "/en/dopolnitelnye-uslugi/consultations",
          },
          {
            url: "/en/predlozhenija/cost-of-services",
            title: "Admission packages",
          },
        ],
      },
      {
        items: [
          {
            title: "Accommodation in a host family",
            url: "/en/arenda-zhilja/accommodation-in-a-host-family",
          },
          {
            title: "Joint tenancy",
            url: "/en/arenda-zhilja/joint-tenancy",
          },
          {
            title: "Apartment rental",
            url: "/en/arenda-zhilja/apartment-rental",
          },
          {
            url: "/en/arenda-zhilja/student-residences",
            title: "Student residences",
          },
          {
            title: "Buying real estate",
            url: "/en/arenda-zhilja/buying-real-estate",
          },
          {
            url: "/en/arenda-zhilja/registering-residence-permits",
            title: "Registering residence permits",
          },
          {
            url: "/en/arenda-zhilja/utility-connections",
            title: "Utility connections",
          },
          {
            url: "/en/arenda-zhilja/registration-of-the-caf-tax-deduction",
            title: "Registration of the CAF",
          },
          {
            url: "/en/arenda-zhilja/searching-for-a-guarantor-in-france",
            title: "Searching for a guarantor in France",
          },
        ],
        group: {
          url: "/en/arenda-zhilja",
          title: "RENTING",
        },
      },
      {
        group: {
          url: "/en/izuchenie-jazyka",
          title: "LEARNING THE LANGUAGE",
        },
        items: [
          {
            title: "Language Schools",
            url: "/en/izuchenie-jazyka/language-schools",
          },
          {
            title: "French at universities",
            url: "/en/izuchenie-jazyka/french-at-universities",
          },
          {
            url: "/en/izuchenie-jazyka/french-via-skype",
            title: "French via Skype",
          },
          {
            url: "/en/izuchenie-jazyka/private-classes",
            title: "Private classes",
          },
          {
            url: "/en/izuchenie-jazyka/au-pair-programs",
            title: "AU-Pair programs",
          },
          {
            url: "/en/izuchenie-jazyka/work-and-travel-en",
            title: "Work and Travel",
          },
          {
            title: "Professional internships",
            url: "/en/izuchenie-jazyka/professional-internships",
          },
          {
            title: "",
            url: "",
          },
        ],
      },
      {
        items: [
          {
            title: "Invitations for students and parents",
            url: "/en/vizovaja-podderzhka/invitations-for-students-and-parents",
          },
          {
            title: "Preparing for your visa interview",
            url: "/en/vizovaja-podderzhka/preparing-for-your-visa-interview",
          },
          {
            url: "/en/vizovaja-podderzhka/assistance-in-drafting-cover-letters",
            title: "Assistance in drafting cover letters",
          },
          {
            title: "Search for a guardian for minors",
            url: "/en/vizovaja-podderzhka/search-for-a-guardian-for-minors",
          },
          {
            title: "checking documents before submission",
            url: "/en/vizovaja-podderzhka/checking-documents-before-submission",
          },
          {
            url: "/en/vizovaja-podderzhka/getting-a-visa-after-a-refusal",
            title: "Getting a visa after a refusal",
          },
          {
            url: "",
            title: "",
          },
          {
            title: "Student visa extension",
            url: "/en/vizovaja-podderzhka/student-visa-extension",
          },
        ],
        group: {
          url: "/en/vizovaja-podderzhka",
          title: "VISA SUPPORT",
        },
      },
      {
        group: {
          url: "/en/uslugi-po-adaptatsii",
          title: "ADAPTATION SERVICES",
        },
        items: [
          {
            url: "/en/uslugi-po-adaptatsii/opening-a-bank-account",
            title: "Opening a bank account",
          },
          {
            url: "/en/uslugi-po-adaptatsii/obtaining-medical-insurance",
            title: "Obtaining medical insurance",
          },
          {
            title: "OFII Procedure",
            url: "/en/vizovaja-podderzhka/ofii-procedure",
          },
          {
            url: "/en/uslugi-po-adaptatsii/first-doctors-appointment",
            title: "First doctor’s appointment",
          },
          {
            url: "/en/uslugi-po-adaptatsii/mobile-phones",
            title: "Mobile Phones",
          },
          {
            title: "Travel pass",
            url: "/en/uslugi-po-adaptatsii/travel-pass",
          },
          {
            url: "/en/uslugi-po-adaptatsii/adaptation-service-packages",
            title: "Adaptation service packages",
          },
        ],
      },
    ],
  },
  cn: {
    socials: [
      {
        title: "",
        url: "",
      },
      {
        url: "",
        title: "",
      },
      {
        url: "https://fr.linkedin.com/in/quartier-latin-0b9ba084",
        title: "linkedIn",
      },
      {
        url: "https://www.instagram.com/quartierlatinfr/",
        title: "instagram",
      },
      {
        url: "",
        title: "",
      },
      {
        title: "",
        url: "",
      },
      {
        url: "https://www.facebook.com/QuartierLatinFR/",
        title: "facebook",
      },
      {
        url: "https://twitter.com/quartierlatinfr",
        title: "https://twitter.com/quartierlatinfr",
      },
    ],
    headLinks: [
      {
        icon: "/images/icons/chain.svg",
        link: {
          title: "对于合作伙伴",
          url: "/cn/dlja-partnerov",
        },
      },
      {
        icon: "/images/icons/equals.svg",
        link: {
          title: "公司简介",
          url: "/cn/o-kompanii",
        },
      },
      {
        icon: "/images/icons/information.svg",
        link: {
          title: "常见问题与解答",
          url: "/cn/faq",
        },
      },
    ],
    writeUs: "给我们留言",
    links: [
      {
        group: {
          url: "/cn/education",
          title: "高等教育",
        },
        items: [
          {
            title: "翻译公证文件",
            url: "/cn/dopolnitelnye-uslugi/zaverennyj-perevod-dokumentov",
          },
          {
            url: "/cn/dopolnitelnye-uslugi/sostavlenie-i-perevod-rezjume",
            title: "修改简历",
          },
          {
            url: "/cn/dopolnitelnye-uslugi/sostavlenie-motivatsionnyh-pisem",
            title: "修改动机信",
          },
          {
            title: "准备学校面试",
            url: "/cn/dopolnitelnye-uslugi/podbor-i-zapis-na-stipendiju",
          },
          {
            url: "/cn/dopolnitelnye-uslugi/podgotovka-k-sobesedovaniju-na-postuplenie",
            title: "申请奖学金",
          },
          {
            title: "行政支持",
            url: "/cn/dopolnitelnye-uslugi/zapolnenie-anket",
          },
          {
            title: "咨询",
            url: "/cn/dopolnitelnye-uslugi/konsultatsii",
          },
          {
            title: "费用明细",
            url: "/cn/predlozhenija/stoimost-uslug",
          },
        ],
      },
      {
        items: [
          {
            url: "/cn/arenda-zhilja/prozhivanie-v-semjah",
            title: "寄宿法国家庭",
          },
          {
            title: "合租",
            url: "/cn/arenda-zhilja/sovmestnaja-arenda-zhilja",
          },
          {
            url: "/cn/arenda-zhilja/arenda-kvartir",
            title: "租一间私人公寓",
          },
          {
            title: "学生公寓",
            url: "/cn/arenda-zhilja/studencheskie-rezidentsii",
          },
          {
            url: "/cn/arenda-zhilja/pokupka-nedvizhimosti",
            title: "在法国购买房产",
          },
          {
            url: "/cn/arenda-zhilja/oformlenie-dokumentov-na-prozhivanie",
            title: "准备租房需要的文件",
          },
          {
            title: "电力与网络",
            url: "/cn/arenda-zhilja/podkljuchenie-bytovyh-kommunikatsij",
          },
          {
            title: "申请住房补贴",
            url: "/cn/arenda-zhilja/oformlenie-nalogovogo-vycheta-caf",
          },
          {
            title: "寻找租房担保人",
            url: "/cn/arenda-zhilja/poisk-garanta-vo-frantsii",
          },
        ],
        group: {
          url: "/cn/arenda-zhilja",
          title: "住房业务",
        },
      },
      {
        group: {
          url: "/cn/izuchenie-jazyka",
          title: "语言学习",
        },
        items: [
          {
            title: "语言学校",
            url: "/cn/izuchenie-jazyka/jazykovye-shkoly",
          },
          {
            url: "/cn/izuchenie-jazyka/frantsuzskij-v-universitetah",
            title: "大学语言中心",
          },
          {
            url: "/cn/izuchenie-jazyka/frantsuzskij-po-skype",
            title: "通过Skype学习法语",
          },
          {
            url: "/cn/izuchenie-jazyka/individualnye-zanjatija",
            title: "法语家教",
          },
          {
            url: "/cn/izuchenie-jazyka/programmy-au-pair",
            title: "互惠生项目",
          },
          {
            url: "/cn/izuchenie-jazyka/work-and-travel",
            title: "工作与旅游",
          },
          {
            title: "在法国实习",
            url: "/cn/izuchenie-jazyka/professionalnye-stazhirovki",
          },
          {
            url: "",
            title: "",
          },
        ],
      },
      {
        items: [
          {
            title: "出具邀请函",
            url: "/cn/vizovaja-podderzhka/priglashenija-dlja-studentov-i-roditelej",
          },
          {
            title: "面签辅导",
            url: "/cn/vizovaja-podderzhka/podgotovka-k-sobesedovaniju-na-vizu",
          },
          {
            title: "准备留学动机信",
            url: "/cn/vizovaja-podderzhka/sostavlenie-soprovoditelnyh-pisem",
          },
          {
            url: "/cn/vizovaja-podderzhka/poisk-opekuna-dlja-nesovershennoletnih",
            title: "寻找一个在法监护人",
          },
          {
            url: "/cn/vizovaja-podderzhka/proverka-dokumentov-pered-podachej",
            title: "材料审核",
          },
          {
            title: "拒签后重新申请签证",
            url: "/cn/vizovaja-podderzhka/poluchenie-vizy-posle-otkaza",
          },
          {
            title: "签证申请服务",
            url: "/cn/vizovaja-podderzhka/help-with-visa",
          },
          {
            title: "延长学生签证",
            url: "/cn/vizovaja-podderzhka/prodlenie-studencheskoj-vizy",
          },
        ],
        group: {
          title: "签证申请",
          url: "/cn/vizovaja-podderzhka",
        },
      },
      {
        group: {
          title: "协助办理法国行政手续",
          url: "/cn/uslugi-po-adaptatsii",
        },
        items: [
          {
            title: "银行开户",
            url: "/cn/uslugi-po-adaptatsii/otkrytie-bankovskogo-scheta",
          },
          {
            title: "社会保险",
            url: "/cn/uslugi-po-adaptatsii/poluchenie-meditsinskoj-strahovki",
          },
          {
            url: "/cn/vizovaja-podderzhka/protsedura-ofii",
            title: "居留手续",
          },
          {
            title: "约见社保要求的私人医生",
            url: "/cn/uslugi-po-adaptatsii/pervyj-vizit-k-vrachu",
          },
          {
            title: "办理网络与电话",
            url: "/cn/uslugi-po-adaptatsii/sotovaja-svjaz",
          },
          {
            url: "/cn/uslugi-po-adaptatsii/proezdnoj",
            title: "交通卡",
          },
          {
            title: "法国行政手续办理服务套餐",
            url: "/cn/uslugi-po-adaptatsii/pakety-uslug-po-adaptatsii",
          },
        ],
      },
    ],
  },
  fr: {
    socials: [
      {
        title: "",
        url: "",
      },
      {
        title: "G+",
        url: "https://plus.google.com/u/0/113429684776507604204",
      },
      {
        url: "https://fr.linkedin.com/in/quartier-latin-0b9ba084",
        title: "linkedIn",
      },
      {
        url: "https://www.instagram.com/quartierlatinfr/",
        title: "instagram",
      },
      {
        title: "",
        url: "",
      },
      {
        title: "vk",
        url: "https://vk.com/quartierlatinru",
      },
      {
        title: "facebook",
        url: "https://www.facebook.com/QuartierLatinFR/",
      },
      {
        url: "https://twitter.com/quartierlatinfr",
        title: "twitter",
      },
    ],
    headLinks: [
      {
        icon: "/images/icons/chain.svg",
        link: {
          title: "Pour les partenaires",
          url: "/fr/dlja-partnerov",
        },
      },
      {
        icon: "/images/icons/equals.svg",
        link: {
          url: "/fr/o-kompanii",
          title: "QUI SOMMES-NOUS?",
        },
      },
      {
        icon: "/images/icons/information.svg",
        link: {
          url: "/fr/faq",
          title: "FAQ",
        },
      },
    ],
    writeUs: "NOUS ECRIRE",
    links: [
      {
        group: {
          title: "Enseignement",
          url: "/fr/education",
        },
        items: [
          {
            url: "/fr/dopolnitelnye-uslugi/traduction-notariee-de-documents",
            title: "Traduction notariée de documents",
          },
          {
            title: "Aide à la rédaction d'un CV",
            url: "/fr/dopolnitelnye-uslugi/aide-a-la-redaction-et-a-la-traduction-dun-cv",
          },
          {
            title: "Aide à la rédaction d'une lettre de motivation",
            url: "/fr/dopolnitelnye-uslugi/aide-a-la-redaction-et-a-la-mise-en-forme-dune-lettre-de-motivation",
          },
          {
            url:
              "/fr/dopolnitelnye-uslugi/preparation-a-lentretien-dadmission-a-un-etablissement-denseignement-superieur",
            title: "Préparation à l'entretien d'admission à un établissement",
          },
          {
            url: "/fr/dopolnitelnye-uslugi/selection-et-candidature-a-une-bourse",
            title: "Candidature à une bourse",
          },
          {
            url: "/fr/dopolnitelnye-uslugi/soutien-administratif",
            title: "Soutien administratif",
          },
          {
            title: "Consultation",
            url: "/fr/dopolnitelnye-uslugi/consultation",
          },
          {
            url: "/fr/predlozhenija/tarifs-de-nos-services",
            title: "Tarifs de nos services",
          },
        ],
      },
      {
        items: [
          {
            url: "/fr/arenda-zhilja/hebergement-en-famille-daccueil",
            title: "Hébergement en famille d'accueil",
          },
          {
            url: "/fr/arenda-zhilja/colocation",
            title: "Colocation",
          },
          {
            url: "/fr/arenda-zhilja/location-dappartement",
            title: "Location d'appartement",
          },
          {
            title: "Résidences étudiantes",
            url: "/fr/arenda-zhilja/residences-etudiantes",
          },
          {
            title: "Achat d'un bien immobilier",
            url: "/fr/arenda-zhilja/achat-dun-bien-immobilier",
          },
          {
            title: "Régularisation du séjour en France",
            url: "/fr/arenda-zhilja/preparation-des-documents-pour-le-logement",
          },
          {
            url: "/fr/arenda-zhilja/mise-en-service-et-raccordement-aux-reseaux-domestiques",
            title: "Raccordement aux réseaux domestiques",
          },
          {
            url: "/fr/arenda-zhilja/demande-daides-au-logement-aupres-de-la-caf",
            title: "Demande d'aides au logement",
          },
          {
            title: "Recherche d'un garant financier en France",
            url: "/fr/arenda-zhilja/recherche-dun-garant-financier-en-france",
          },
        ],
        group: {
          url: "/fr/arenda-zhilja",
          title: "HÉBERGEMENT",
        },
      },
      {
        group: {
          url: "/fr/izuchenie-jazyka",
          title: "APPRENTISSAGE DE LA LANGUE",
        },
        items: [
          {
            url: "/fr/izuchenie-jazyka/ecoles-de-langues",
            title: "Ecoles de langues",
          },
          {
            title: "Français à l’université",
            url: "/fr/izuchenie-jazyka/francais-a-luniversites-duef-dulf",
          },
          {
            url: "/fr/izuchenie-jazyka/cours-de-fle-sur-skype",
            title: "Cours de FLE sur Skype",
          },
          {
            title: "Cours particuliers",
            url: "/fr/izuchenie-jazyka/cours-particuliers",
          },
          {
            title: "Programmes Au Pair",
            url: "/fr/izuchenie-jazyka/programmes-au-pair",
          },
          {
            url: "/fr/izuchenie-jazyka/work-and-travel",
            title: "Work and Travel",
          },
          {
            url: "/fr/izuchenie-jazyka/stage-professionnel",
            title: "Stage professionnel",
          },
          {
            url: "",
            title: "",
          },
        ],
      },
      {
        items: [
          {
            title: "Invitation pour étudiants et parents",
            url: "/fr/vizovaja-podderzhka/invitation-pour-etudiants-et-parents",
          },
          {
            url: "/fr/vizovaja-podderzhka/assistance-a-la-preparation-des-lettres-daccompagnement",
            title: "Préparation des lettres d’accompagnement",
          },
          {
            title: "Recherche d’un tuteur pour les mineurs",
            url: "/fr/vizovaja-podderzhka/recherche-dun-tuteur-pour-les-mineurs",
          },
          {
            title: "Contrôle avant dépôt",
            url: "/fr/vizovaja-podderzhka/controle-des-documents-avant-depot",
          },
          {
            title: "Préparation à l'entretien pour l'obtention d'un visa",
            url: "/fr/vizovaja-podderzhka/preparation-a-lentretien-pour-lobtention-dun-visa",
          },
          {
            title: "Nouvelle demande de visa après un refus",
            url: "/fr/vizovaja-podderzhka/nouvelle-demande-de-visa-apres-un-refus",
          },
          {
            url: "",
            title: "",
          },
          {
            title: "Prolongation du visa étudiant",
            url: "/fr/vizovaja-podderzhka/prolongation-du-visa-etudiant",
          },
        ],
        group: {
          url: "/fr/vizovaja-podderzhka",
          title: "AIDE À L’OBTENTION DU VISA",
        },
      },
      {
        group: {
          url: "/fr/uslugi-po-adaptatsii",
          title: "SERVICES D'ADAPTATION",
        },
        items: [
          {
            url: "/fr/uslugi-po-adaptatsii/louverture-dun-compte-bancaire",
            title: "Ouverture d’un compte bancaire",
          },
          {
            url: "/fr/uslugi-po-adaptatsii/la-securite-sociale-et-les-mutuelles-etudiantes",
            title: "Sécurité sociale et mutuelles",
          },
          {
            url: "/fr/vizovaja-podderzhka/procedure-ofii",
            title: "Procedure OFII",
          },
          {
            title: "Première visite chez le médecin",
            url: "/fr/uslugi-po-adaptatsii/la-premiere-visite-chez-le-medecin-generaliste",
          },
          {
            url: "/fr/uslugi-po-adaptatsii/reseau-telephonique-et-internet",
            title: "Téléphone et internet",
          },
          {
            url: "/fr/uslugi-po-adaptatsii/titre-de-transport",
            title: "Titre de transport",
          },
          {
            title: "Pack de services d'adaptation",
            url: "/fr/uslugi-po-adaptatsii/pack-de-services-dadaptation",
          },
        ],
      },
    ],
  },
  esp: {
    socials: [
      {
        url: "",
        title: "",
      },
      {
        url: "https://plus.google.com/u/0/113429684776507604204",
        title: "G+",
      },
      {
        url: "https://fr.linkedin.com/in/quartier-latin-0b9ba084",
        title: "linkedIn",
      },
      {
        title: "instagram",
        url: "https://www.instagram.com/quartierlatinesp/",
      },
      {
        title: "",
        url: "",
      },
      {
        url: "",
        title: "",
      },
      {
        url: "https://www.facebook.com/QuartierLatinEN/",
        title: "facebook",
      },
      {
        url: "https://twitter.com/QuartierLatinRU",
        title: "twitter",
      },
    ],
    headLinks: [
      {
        icon: "/images/icons/chain.svg",
        link: {
          url: "/esp/dlja-partnerov",
          title: "PARA SOCIOS",
        },
      },
      {
        icon: "/images/icons/equals.svg",
        link: {
          title: "¿QUIÉNES SOMOS?",
          url: "/esp/o-kompanii",
        },
      },
      {
        icon: "/images/icons/information.svg",
        link: {
          url: "/esp/faq",
          title: "PREGUNTAS FRECUENTES ",
        },
      },
    ],
    writeUs: "Escríbenos",
    links: [
      {
        group: {
          title: "ESTUDIOS",
          url: "/esp/education",
        },
        items: [
          {
            title: "Traducción jurada de documentos",
            url: "/esp/dopolnitelnye-uslugi/certified-translation-of-documents",
          },
          {
            url: "/esp/dopolnitelnye-uslugi/assistance-in-preparing-and-translating-your-cv",
            title: "Asistencia para la preparación y traducción del CV",
          },
          {
            title: "Asistencia para la redacción de cartas de motivación",
            url: "/esp/dopolnitelnye-uslugi/assistance-in-preparing-and-writing-motivation-letters",
          },
          {
            url: "/esp/dopolnitelnye-uslugi/selecting-and-applying-for-a-scholarship",
            title: "Selección y solicitud de una beca",
          },
          {
            url: "/esp/dopolnitelnye-uslugi/preparing-for-a-university-interview",
            title: "Preparación para entrevistas de admisión a la universidad",
          },
          {
            url: "/esp/dopolnitelnye-uslugi/filling-in-the-application-form",
            title: "Cumplimentación de formularios ",
          },
          {
            url: "/esp/dopolnitelnye-uslugi/consultations",
            title: "Consultas",
          },
          {
            url: "/esp/predlozhenija/cost-of-services",
            title: "Admission packages",
          },
        ],
      },
      {
        items: [
          {
            url: "/esp/arenda-zhilja/accommodation-in-a-host-family",
            title: "Familias de acogida",
          },
          {
            url: "/esp/arenda-zhilja/joint-tenancy",
            title: "Pisos compartidos ",
          },
          {
            url: "/esp/arenda-zhilja/apartment-rental",
            title: "Alquiler de pisos ",
          },
          {
            title: "Residencias de estudiantes",
            url: "/esp/arenda-zhilja/student-residences",
          },
          {
            title: "Adquisición de bienes inmuebles",
            url: "/esp/arenda-zhilja/buying-real-estate",
          },
          {
            title: "Contrato de alquiler",
            url: "/esp/arenda-zhilja/registering-residence-permits",
          },
          {
            title: "Redes domésticas y servicios públicos ",
            url: "/esp/arenda-zhilja/utility-connections",
          },
          {
            url: "/esp/arenda-zhilja/registration-of-the-caf-tax-deduction",
            title: "Ayuda personalizada para la vivienda (CAF)",
          },
          {
            url: "/esp/arenda-zhilja/searching-for-a-guarantor-in-france",
            title: "Búsqueda de un garante en Francia",
          },
        ],
        group: {
          url: "/esp/arenda-zhilja",
          title: "ALOJAMIENTO",
        },
      },
      {
        group: {
          url: "/esp/izuchenie-jazyka",
          title: "APRENDIZAJE DEL FRANCÉS ",
        },
        items: [
          {
            title: "Escuelas de idiomas",
            url: "/esp/izuchenie-jazyka/language-schools",
          },
          {
            title: "Francés en la universidad",
            url: "/esp/izuchenie-jazyka/french-at-universities",
          },
          {
            title: "Cursos de francés por Skype",
            url: "/esp/izuchenie-jazyka/french-via-skype",
          },
          {
            title: "Clases particulares",
            url: "/esp/izuchenie-jazyka/private-classes",
          },
          {
            url: "/esp/izuchenie-jazyka/au-pair-programs",
            title: "Programas Au Pair",
          },
          {
            url: "/esp/izuchenie-jazyka/work-and-travel-en",
            title: "Work and Travel",
          },
          {
            url: "/esp/izuchenie-jazyka/professional-internships",
            title: "Prácticas profesionales",
          },
          {
            title: "",
            url: "",
          },
        ],
      },
      {
        items: [
          {
            url: "/esp/vizovaja-podderzhka/invitations-for-students-and-parents",
            title: "Invitación para estudiantes y padres",
          },
          {
            title: "Preparación de la cita en el consulado ",
            url: "/esp/vizovaja-podderzhka/preparing-for-your-visa-interview",
          },
          {
            title: "Asistencia para la redacción de cartas de presentación",
            url: "/esp/vizovaja-podderzhka/assistance-in-drafting-cover-letters",
          },
          {
            url: "/esp/vizovaja-podderzhka/search-for-a-guardian-for-minors",
            title: "Búsqueda de un tutor para menores",
          },
          {
            url: "/esp/vizovaja-podderzhka/checking-documents-before-submission",
            title: "Revisión de los documentos antes de la solicitud",
          },
          {
            url: "/esp/vizovaja-podderzhka/getting-a-visa-after-a-refusal",
            title: "Obtención del visado tras una denegación ",
          },
          {
            url: "",
            title: "",
          },
          {
            title: "Prórroga del visado de estudiante",
            url: "/esp/vizovaja-podderzhka/student-visa-extension",
          },
        ],
        group: {
          title: "GESTIÓN DEL VISADO",
          url: "/esp/vizovaja-podderzhka",
        },
      },
      {
        group: {
          url: "/esp/uslugi-po-adaptatsii",
          title: "ADAPTACIÓN ",
        },
        items: [
          {
            title: "Cuenta bancaria",
            url: "/esp/uslugi-po-adaptatsii/opening-a-bank-account",
          },
          {
            title: "Seguro médico",
            url: "/esp/uslugi-po-adaptatsii/obtaining-medical-insurance",
          },
          {
            title: "Procedimiento OFII",
            url: "/esp/vizovaja-podderzhka/ofii-procedure",
          },
          {
            url: "/esp/uslugi-po-adaptatsii/first-doctors-appointment",
            title: "Primera cita con el médico",
          },
          {
            url: "/esp/uslugi-po-adaptatsii/mobile-phones",
            title: "Teléfono móvil e Internet ",
          },
          {
            title: "Abono de transporte ",
            url: "/esp/uslugi-po-adaptatsii/travel-pass",
          },
          {
            title: "Paquetes de servicios de adaptación",
            url: "/esp/uslugi-po-adaptatsii/adaptation-service-packages",
          },
        ],
      },
    ],
  },
};

export default footerData;
