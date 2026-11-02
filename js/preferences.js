(() => {
  'use strict';

  const root = document.documentElement;
  const storageKeys = { language: 'kirolos-portfolio-language', theme: 'kirolos-portfolio-theme' };

  // English source strings are kept in the HTML. This dictionary supplies the Arabic version.
  const ar = {
    'Skip to content': 'تخطّي إلى المحتوى',
    'Sections': 'الأقسام',
    'Breadcrumb': 'مسار التنقّل',
    'Kirolos': 'كيرلس',
    'Emad': 'عماد',
    'Junior Flutter Developer': 'مطور Flutter مبتدئ',
    'Home': 'الرئيسية',
    'Projects': 'المشاريع',
    'Training': 'التدريب',
    'Education': 'التعليم',
    'Certificates': 'الشهادات',
    'Skills': 'المهارات',
    'About': 'نبذة عني',
    'Contact': 'تواصل معي',
    'I build Flutter apps with Dart, REST APIs and local storage, and I’m a third-year Computers and Information student.': 'أطوّر تطبيقات Flutter باستخدام Dart وواجهات REST API والتخزين المحلي، وأنا طالب في الفرقة الثالثة بكلية الحاسبات والمعلومات.',
    'Download CV': 'تحميل السيرة الذاتية',
    'Email me': 'راسلني',
    'Projects I’ve built': 'المشاريع التي نفّذتها',
    'Five Flutter projects spanning finance UI, local data, REST APIs, e-commerce, and cross-platform business management. Each project opens to its own case study.': 'خمسة مشاريع باستخدام Flutter تشمل تطبيقات مالية، وتخزين البيانات محليًا، وواجهات REST API، والتجارة الإلكترونية، وإدارة الأعمال عبر منصات متعددة. لكل مشروع صفحة تعرض تفاصيله.',
    'Mobile app · Android emulator captures': 'تطبيق موبايل · لقطات من محاكي Android',
    'Flutter app · Android emulator screenshots': 'تطبيق Flutter · لقطات من محاكي Android',
    'Flutter app · Android and web · English and Arabic': 'تطبيق Flutter · Android والويب · العربية والإنجليزية',
    '01 / 05 · Business Management': '01 / 05 · إدارة الأعمال',
    '02 / 05 · E-commerce & REST API': '02 / 05 · تجارة إلكترونية وREST API',
    '03 / 05 · REST API Application': '03 / 05 · تطبيق REST API',
    '04 / 05 · Local Data Application': '04 / 05 · تطبيق بيانات محلي',
    '05 / 05 · Finance Application': '05 / 05 · تطبيق مالي',
    'Finance app screens and interaction flows for authentication, dashboard metrics, cards, charts and profile views, built with responsive layouts, navigation, charts and carousels.': 'واجهات وتفاعلات تطبيق مالي تشمل تسجيل الدخول، ولوحة المؤشرات، والبطاقات، والرسوم البيانية، والملف الشخصي، مع تصميم متجاوب وتنقّل ورسوم متحركة.',
    'Read the case study': 'عرض تفاصيل المشروع',
    'GitHub repository': 'مستودع GitHub',
    'A local-first meal management app for adding and browsing meals, with an onboarding carousel, a two-column meal grid, and a dedicated details screen. Meal records persist locally with SQLite.': 'تطبيق لإدارة الوجبات يعتمد على التخزين المحلي، ويتيح إضافة الوجبات واستعراضها من خلال شاشة ترحيبية وشبكة من عمودين وصفحة مستقلة للتفاصيل. تُحفَظ بيانات الوجبات محليًا باستخدام SQLite.',
    'A Flutter news app for exploring headlines and categories, with keyword search and English and Arabic search results powered by a REST API.': 'تطبيق أخبار باستخدام Flutter لاستعراض العناوين والتصنيفات والبحث بالكلمات المفتاحية، مع عرض نتائج البحث بالعربية والإنجليزية بالاعتماد على REST API.',
    'A Flutter shopping app with API-powered product discovery, category browsing and search, product details, account authentication, and a cart persisted locally on the device.': 'تطبيق للتسوّق باستخدام Flutter يتيح استعراض المنتجات والتصنيفات والبحث عنها، وعرض التفاصيل، وتسجيل الحسابات، وإدارة سلة مشتريات تُحفَظ محليًا على الجهاز.',
    'Masiter | مسيطر': 'مسيطر | Masiter',
    'A collaborative business-management app for shops and small businesses, bringing products, inventory, sales invoices, customers and receivables into one Flutter experience across Android and web.': 'تطبيق تعاوني لإدارة المحلات والمشروعات الصغيرة، يجمع المنتجات والمخزون وفواتير البيع والعملاء والمستحقات في تجربة واحدة باستخدام Flutter على Android والويب.',
    'Live web app': 'نسخة الويب المباشرة',
    'One program so far: 102 hours of Flutter development training.': 'برنامج تدريبي واحد حتى الآن: 102 ساعة من التدريب على تطوير تطبيقات Flutter.',
    '2026 · 102 hours': '2026 · 102 ساعة',
    'Flutter Development Training': 'تدريب تطوير تطبيقات Flutter',
    'A 102-hour training program in Flutter development.': 'برنامج تدريبي لمدة 102 ساعة في تطوير تطبيقات Flutter.',
    'B.Sc. in Computers and Information': 'بكالوريوس الحاسبات والمعلومات',
    'Beni Suef Private University': 'جامعة بني سويف الأهلية',
    'In progress · Third-year student · Grade: Very Good': 'قيد الدراسة · الفرقة الثالثة · التقدير: جيد جدًا',
    'I study Computers and Information while building Flutter apps.': 'أدرس الحاسبات والمعلومات بالتوازي مع تطوير تطبيقات Flutter.',
    'Courses and workshops from my CV.': 'الدورات وورش العمل المذكورة في سيرتي الذاتية.',
    'The Complete Flutter & Dart: Basics to Advanced': 'دورة Flutter وDart الشاملة: من الأساسيات إلى الاحتراف',
    'Flutter MVVM Workshop': 'ورشة عمل Flutter وMVVM',
    'The Complete Flutter Development Guide': 'الدليل الشامل لتطوير تطبيقات Flutter',
    'Skill groups as listed in my CV, with where I used them.': 'مجموعات المهارات كما وردت في سيرتي الذاتية، مع أمثلة على استخدامها في مشاريعي.',
    'Flutter development': 'تطوير تطبيقات Flutter',
    'Responsive layouts in Financi and the News App; reusable components in E-commerce; and mobile/web layouts in Masiter.': 'تصميمات متجاوبة في Financi وتطبيق الأخبار، ومكوّنات قابلة لإعادة الاستخدام في تطبيق التجارة الإلكترونية، وواجهات للموبايل والويب في مسيطر.',
    'State management & architecture': 'إدارة الحالة والمعمارية البرمجية',
    'Related training: Flutter MVVM Workshop (2026).': 'التدريب المرتبط: ورشة Flutter MVVM لعام 2026.',
    'APIs & data storage': 'واجهات API وتخزين البيانات',
    'REST API data in the News and E-commerce apps; Sqflite and SharedPreferences in Meals; Firebase and Supabase integrations in Masiter.': 'استخدام REST API في تطبيقي الأخبار والتجارة الإلكترونية، وSqflite وSharedPreferences في تطبيق الوجبات، وFirebase وSupabase في مسيطر.',
    'Navigation, testing & tools': 'التنقّل والاختبار والأدوات',
    'GoRouter handles navigation across several Flutter projects, including Financi, News App, E-commerce and Masiter.': 'استخدمت GoRouter لإدارة التنقّل في عدة مشاريع Flutter، منها Financi وتطبيق الأخبار والتجارة الإلكترونية ومسيطر.',
    'I’m a junior Flutter developer and a third-year Computers and Information student at Beni Suef Private University. I’ve built four Flutter apps that cover authentication flows, charts, local storage with Sqflite and REST API data. I care about maintainable app architecture and work with BLoC/Cubit, MVVM and dependency injection. My training includes a 102-hour Flutter program at ITI, plus several Flutter and Dart courses.': 'أنا مطور Flutter، وطالب في الفرقة الثالثة بكلية الحاسبات والمعلومات بجامعة بني سويف الأهلية. نفّذت تطبيقات Flutter تتضمن أنظمة تسجيل الدخول، والرسوم البيانية، والتخزين المحلي باستخدام Sqflite، والتعامل مع REST API. أهتم بكتابة كود منظم قابل للصيانة، وأعمل باستخدام BLoC/Cubit وMVVM والحقن الاعتمادي. يشمل تدريبي برنامج Flutter لمدة 102 ساعة في ITI، إلى جانب عدة دورات في Flutter وDart.',
    'Email': 'البريد الإلكتروني',
    'GitHub': 'GitHub',
    'LinkedIn': 'LinkedIn',
    'Phone': 'الهاتف',
    'Website': 'الموقع',
    'CV': 'السيرة الذاتية',
    'Download CV (PDF)': 'تحميل السيرة الذاتية (PDF)',
    'Back to all projects': 'العودة إلى كل المشاريع',
    'Previous project: E-commerce Application': 'المشروع السابق: تطبيق التجارة الإلكترونية',
    'Next project: E-commerce Application': 'المشروع التالي: تطبيق التجارة الإلكترونية',
    'Previous project: Masiter': 'المشروع السابق: مسيطر',
    'Next project: News App': 'المشروع التالي: تطبيق الأخبار',
    'Previous project: News App': 'المشروع السابق: تطبيق الأخبار',
    'Next project: Meals App': 'المشروع التالي: تطبيق الوجبات',
    'Previous project: Meals App': 'المشروع السابق: تطبيق الوجبات',
    'Next project: Financi App': 'المشروع التالي: Financi',
    'Previous project: Financi App': 'المشروع السابق: Financi',
    'Open Masiter web app': 'فتح تطبيق مسيطر على الويب',
    'Previous': 'السابق',
    'Next': 'التالي',
    'Close': 'إغلاق',
    'Project overview': 'نظرة عامة على المشروع',
    'What it does': 'ماذا يقدم المشروع',
    'Key features': 'أهم المميزات',
    'Technology stack': 'التقنيات المستخدمة',
    'Screenshots': 'صور من التطبيق',
    'Mobile screenshots': 'صور تطبيق الموبايل',
    'Web screenshots': 'صور نسخة الويب',
    'Implementation notes': 'ملاحظات التنفيذ',
    'API integration': 'التكامل مع API',
    'Local data': 'البيانات المحلية',
    'Local storage and current scope': 'التخزين المحلي والنطاق الحالي',
    'Architecture and code organization': 'المعمارية وتنظيم الكود',
    'Architecture and implementation': 'المعمارية والتنفيذ',
    'Code organization': 'تنظيم الكود',
    'Platforms and configurations': 'المنصات والإعدادات',
    'Collaboration and learning': 'التعاون والتعلّم',
    'Framework': 'إطار العمل',
    'Data': 'البيانات',
    'State': 'إدارة الحالة',
    'Storage': 'التخزين',
    'Platform': 'المنصة',
    'Platforms': 'المنصات',
    'Navigation': 'التنقّل',
    'Design size': 'مقاس التصميم',
    'Onboarding state': 'حالة شاشة الترحيب',
    'Interface': 'الواجهة',
    'Search': 'البحث',
    'Backend': 'الخلفية البرمجية',
    'Languages': 'اللغات',
    'Collaboration': 'التعاون',
    'Scope': 'النطاق',
    'Android and iOS': 'Android وiOS',
    'Android mobile UI': 'واجهة موبايل Android',
    'UI only, static demo data': 'واجهات فقط، ببيانات تجريبية ثابتة',
    'The app presents a product-discovery flow inspired by modern shopping applications. The home screen retrieves products and categories from the EscuelaJS Fake Store API, while category selection and keyword search help users narrow the catalog. Selecting a product opens a dedicated details page showing its image, title, description and price.': 'يعرض التطبيق تجربة لاستكشاف المنتجات مستوحاة من تطبيقات التسوق الحديثة. تجلب الشاشة الرئيسية المنتجات والتصنيفات من EscuelaJS Fake Store API، كما يساعد اختيار التصنيف والبحث بالكلمات المفتاحية على الوصول إلى المنتجات المطلوبة. وعند اختيار منتج، تُفتح صفحة تفاصيل تعرض صورته واسمه ووصفه وسعره.',
    'Users can add products to a cart, adjust quantities and remove items. Cart data is serialized and stored locally so it can be restored when the app is reopened. Login and registration use API endpoints, while tokens returned after login are saved securely on the device.': 'يمكن للمستخدم إضافة المنتجات إلى السلة وتعديل الكميات أو حذف المنتجات. تُحوّل بيانات السلة إلى صيغة JSON وتُحفظ محليًا لاستعادتها عند فتح التطبيق مرة أخرى. ويستخدم تسجيل الدخول وإنشاء الحساب نقاط API، مع حفظ الرموز الناتجة عن تسجيل الدخول بصورة آمنة على الجهاز.',
    'Register a new account and sign in through the REST API, with input validation on authentication forms.': 'إنشاء حساب جديد وتسجيل الدخول عبر REST API، مع التحقق من المدخلات في نماذج المصادقة.',
    'Load and browse products from the API, with category filtering and an All category.': 'تحميل المنتجات واستعراضها من API، مع إمكانية التصفية حسب التصنيف واختيار عرض الكل.',
    'Search the catalog by product title.': 'البحث في المنتجات باستخدام اسم المنتج.',
    'Open a product details screen with product image, title, description and price.': 'فتح شاشة تفاصيل المنتج التي تعرض الصورة والاسم والوصف والسعر.',
    'Add products to the cart, increase or decrease quantities, and remove items.': 'إضافة المنتجات إلى السلة وزيادة الكمية أو تقليلها وحذف العناصر.',
    'Persist cart contents in SharedPreferences so cart items can be restored after reopening the app.': 'حفظ محتويات السلة باستخدام SharedPreferences لاستعادتها عند فتح التطبيق مرة أخرى.',
    'Store access and refresh tokens with flutter_secure_storage after a successful login.': 'حفظ Access Token وRefresh Token باستخدام flutter_secure_storage بعد تسجيل الدخول بنجاح.',
    'Navigate between Home, Cart and Account through the bottom navigation bar.': 'التنقّل بين الرئيسية والسلة والحساب من خلال شريط التنقّل السفلي.',
    'Show an account area, sample address-book entries and a logout action.': 'عرض قسم الحساب وعناوين تجريبية وخيار تسجيل الخروج.',
    'Use responsive sizing with Flutter ScreenUtil and reusable UI components.': 'استخدام Flutter ScreenUtil لضبط المقاسات، إلى جانب مكوّنات واجهة قابلة لإعادة الاستخدام.',
    'The application uses the EscuelaJS Fake Store API as its remote data source.': 'يستخدم التطبيق EscuelaJS Fake Store API كمصدر خارجي للبيانات.',
    'Base URL:': 'الرابط الأساسي:',
    '— retrieve the product catalog.': '— جلب قائمة المنتجات.',
    '— retrieve product categories.': '— جلب تصنيفات المنتجات.',
    '— retrieve products for a selected category.': '— جلب منتجات تصنيف محدد.',
    '— search by product title.': '— البحث باسم المنتج.',
    '— register an account.': '— إنشاء حساب جديد.',
    '— authenticate a user.': '— التحقق من بيانات المستخدم وتسجيل الدخول.',
    'API requests are handled through Dio and the project repository layer. No API key is configured in the supplied source. API availability and behavior depend on the external service.': 'تُنفّذ طلبات API باستخدام Dio وطبقة Repository الخاصة بالمشروع. لا يوجد مفتاح API مُعدّ في الملفات المقدمة. ويعتمد توفر API وطريقة عملها على الخدمة الخارجية.',
    'including product ID, title, price, image URL and quantity. Access and refresh tokens returned after login are stored using': 'بما يشمل معرّف المنتج واسمه وسعره ورابط صورته وكميته. كما تُحفظ رموز الوصول والتحديث الناتجة عن تسجيل الدخول باستخدام',
    'Products and categories are retrieved from the remote API.': 'يتم جلب المنتجات والتصنيفات من API الخارجي.',
    'Current limitations:': 'القيود الحالية:',
    'the checkout button is a UI entry point only; payment and order processing are not connected. The subtotal, VAT, shipping and total shown in the cart are sample values. The addresses shown in the address screen are sample UI entries.': 'زر إتمام الشراء واجهة فقط؛ فلم يتم ربط الدفع أو معالجة الطلبات. كما أن قيم المجموع الفرعي والضريبة والشحن والإجمالي المعروضة في السلة تجريبية، والعناوين الظاهرة في شاشة العناوين أمثلة للواجهة.',
    'The codebase is separated into a shared': 'تم تقسيم الكود إلى طبقة مشتركة باسم',
    'layer and feature-oriented': 'وإلى مجلدات منظّمة حسب الخصائص باسم',
    'directories. Core contains networking, routing, shared styling, service location and storage helpers. Feature directories organize authentication, product discovery, product details, cart, account, address book and splash functionality.': 'تحتوي Core على الاتصال الشبكي والتوجيه والتنسيقات المشتركة وتحديد الخدمات وأدوات التخزين. وتنظم مجلدات Features وظائف المصادقة واستكشاف المنتجات وتفاصيلها والسلة والحساب والعناوين وشاشة البداية.',
    'Cubits manage authentication, categories, products and cart state. Repository classes keep data operations separate from screen widgets, while shared theme and UI components support consistency across screens.': 'تدير Cubits حالات المصادقة والتصنيفات والمنتجات والسلة. وتفصل كلاسّات Repository عمليات البيانات عن عناصر الواجهة، بينما تساعد السمات ومكوّنات الواجهة المشتركة على الحفاظ على الاتساق بين الشاشات.',
    'Screens captured from the Android emulator. Select any image to enlarge it, or use the arrow keys to navigate through the gallery.': 'لقطات شاشة من محاكي Android. اختر أي صورة لعرضها بحجم أكبر، أو استخدم أسهم لوحة المفاتيح للتنقّل بين الصور.',
    '11 screenshots from an Android emulator. Select one to enlarge; use the arrow keys to move between them.': '11 لقطة شاشة من محاكي Android. اختر صورة لتكبيرها، واستخدم أسهم لوحة المفاتيح للتنقّل بينها.',
    'Screens captured from the app. Select any image to enlarge it, or use the arrow keys to move through the gallery.': 'لقطات شاشة من التطبيق. اختر أي صورة لتكبيرها، أو استخدم أسهم لوحة المفاتيح للتنقّل بينها.',
    'A Flutter meal application that lets users add and browse their own meals through a clean mobile interface. Each meal includes a title, image URL, rating, preparation time and description, with meal records saved locally using SQLite.': 'تطبيق وجبات باستخدام Flutter يتيح للمستخدمين إضافة وجباتهم واستعراضها من خلال واجهة موبايل بسيطة. تتضمن كل وجبة الاسم ورابط الصورة والتقييم ووقت التحضير والوصف، مع حفظ بيانات الوجبات محليًا باستخدام SQLite.',
    'Introductory onboarding carousel with Next and Skip actions.': 'شريط تعريفي ترحيبي يتيح الانتقال للخطوة التالية أو التخطي.',
    'Remembers whether onboarding has been seen using SharedPreferences.': 'يحفظ ما إذا كان المستخدم قد شاهد شاشة الترحيب باستخدام SharedPreferences.',
    'Displays saved meals in a two-column grid.': 'يعرض الوجبات المحفوظة في شبكة مكوّنة من عمودين.',
    'Adds a meal with a title, image URL, rating, preparation time and description.': 'يتيح إضافة وجبة مع الاسم ورابط الصورة والتقييم ووقت التحضير والوصف.',
    'Validates required fields in the Add Meal form.': 'يتحقق من الحقول المطلوبة في نموذج إضافة وجبة.',
    'Opens a dedicated details screen for each meal.': 'يفتح شاشة تفاصيل مستقلة لكل وجبة.',
    'Stores meal records locally using SQLite, so saved meals remain available when the app is reopened.': 'يحفظ بيانات الوجبات محليًا باستخدام SQLite لتظل متاحة عند فتح التطبيق مرة أخرى.',
    'Loads meal images from URLs and uses responsive sizing with Flutter ScreenUtil.': 'يحمّل صور الوجبات من الروابط ويستخدم Flutter ScreenUtil لضبط المقاسات بشكل متجاوب.',
    'The app stores meal details on the device using': 'يحفظ التطبيق تفاصيل الوجبات على الجهاز باستخدام',
    'The current implementation uses a local table named `tasks` with fields for the meal title, rating, time, description and image URL.': 'يستخدم التنفيذ الحالي جدولًا محليًا باسم `tasks` يحتوي على حقول لاسم الوجبة والتقييم والوقت والوصف ورابط الصورة.',
    'stores the onboarding-seen state. Remote meal images require an internet connection to load.': 'لحفظ حالة مشاهدة شاشة الترحيب. ويتطلب تحميل صور الوجبات من روابط خارجية وجود اتصال بالإنترنت.',
    'A Flutter news application that helps users explore the latest headlines, browse news by category, and search for articles in English and Arabic. It retrieves news data through a REST API and presents articles in a clean, responsive mobile interface.': 'تطبيق أخبار باستخدام Flutter يساعد المستخدمين على استكشاف أحدث العناوين وتصفح الأخبار حسب التصنيف والبحث عن المقالات بالعربية والإنجليزية. يجلب بيانات الأخبار عبر REST API ويعرضها في واجهة موبايل بسيطة ومتجاوبة.',
    'Retrieves the latest news headlines from a REST API.': 'يجلب أحدث عناوين الأخبار من REST API.',
    'Lets users browse articles through categories including Technology, Business, Travel and Entertainment.': 'يتيح تصفح المقالات حسب تصنيفات مثل التكنولوجيا والأعمال والسفر والترفيه.',
    'Provides a dedicated search screen for finding articles by keyword.': 'يوفر شاشة بحث مستقلة للعثور على المقالات باستخدام الكلمات المفتاحية.',
    'Displays English and Arabic search results.': 'يعرض نتائج البحث باللغتين العربية والإنجليزية.',
    'Shows article cards with titles, images, authors and publication dates when that information is available from the API.': 'يعرض بطاقات المقالات مع العناوين والصور وأسماء الكتّاب وتواريخ النشر عند توفر هذه المعلومات من API.',
    'Uses GoRouter to navigate between the home, search and search-results screens.': 'يستخدم GoRouter للتنقّل بين شاشات الرئيسية والبحث ونتائج البحث.',
    'Uses Flutter ScreenUtil to support responsive sizing and consistent spacing on mobile screens.': 'يستخدم Flutter ScreenUtil لضبط المقاسات والحفاظ على تناسق المسافات على شاشات الموبايل.',
    'The app fetches news headlines and search results from an external news API. Networking logic is separated into service files, keeping API communication apart from the UI. The API provider, available endpoints and authentication requirements depend on the configuration used by the project.': 'يجلب التطبيق عناوين الأخبار ونتائج البحث من خدمة أخبار خارجية عبر API. وقد فُصل منطق الاتصال بالشبكة في ملفات Services حتى يظل التعامل مع API مستقلًا عن الواجهة. ويعتمد مزوّد API والنقاط المتاحة ومتطلبات المصادقة على إعدادات المشروع.',
    'When setting up the project locally, configure the API key required by the selected provider and avoid committing private credentials to a public repository.': 'عند إعداد المشروع محليًا، أضف مفتاح API المطلوب من المزوّد الذي اخترته، وتجنب رفع بيانات الاعتماد السرية إلى مستودع عام.',
    'The codebase is organized into shared Core resources and feature-specific directories. The home, search and search-results features contain their own related models, services and widgets where applicable. This structure keeps shared styling and routing separate from screen-specific functionality.': 'تم تنظيم الكود في موارد مشتركة داخل Core ومجلدات مستقلة لكل خاصية. وتحتوي خصائص الرئيسية والبحث ونتائج البحث على النماذج والخدمات وعناصر الواجهة الخاصة بها عند الحاجة. ويساعد هذا التنظيم على فصل التنسيقات والتوجيه المشتركين عن وظائف كل شاشة.',
    'Finance app screens and interaction flows for authentication, dashboard metrics, cards, charts and profile views, built with responsive layouts, navigation, charts and carousels.': 'واجهات وتفاعلات تطبيق مالي تشمل المصادقة ولوحة المؤشرات والبطاقات والرسوم البيانية والملف الشخصي، مع تصميمات متجاوبة وتنقّل ورسوم بيانية وشرائح عرض.',
    'Authentication screens: login, register, forgot password, verification code, new password and a success screen.': 'شاشات المصادقة: تسجيل الدخول وإنشاء حساب واستعادة كلمة المرور ورمز التحقق وكلمة المرور الجديدة وشاشة النجاح.',
    'Dashboard with a card carousel and Send Money and Pay The Bill actions.': 'لوحة رئيسية تحتوي على شرائح للبطاقات وخياري إرسال الأموال ودفع الفواتير.',
    'Statistics screen with a January–May bar chart for income and outcome.': 'شاشة إحصائيات تعرض رسمًا بيانيًا للأعمدة من يناير إلى مايو للدخل والمصروفات.',
    'All cards and profile screens, with responsive layouts and navigation between them.': 'شاشات البطاقات والملف الشخصي، مع تصميمات متجاوبة وإمكانية التنقّل بينها.',
    'There is no backend: the data shown is static demo data.': 'لا يوجد Backend في هذا المشروع؛ فالبيانات المعروضة تجريبية وثابتة.',
    'Routes are declared with go_router (8 routes); screens are sized from a 375 × 812 design with flutter_screenutil.': 'تم تعريف المسارات باستخدام go_router (عددها 8)، وضبط مقاسات الشاشات بناءً على تصميم 375 × 812 باستخدام flutter_screenutil.',
    'The Add tab in the bottom bar is a placeholder, so it does not appear in the screenshots.': 'زر الإضافة في شريط التنقّل السفلي عنصر تجريبي فقط، لذلك لا يظهر في لقطات الشاشة.',
    '11 screenshots from an Android emulator. Select one to enlarge; use the arrow keys to move between them.': '11 لقطة شاشة من محاكي Android. اختر أي صورة لتكبيرها، واستخدم أسهم لوحة المفاتيح للتنقّل بينها.',
    'Masiter is a collaborative Flutter application for shops and small businesses. It brings product management, inventory, sales invoices, customer records and outstanding balances into one organized workflow, with Arabic and English interfaces, light and dark themes, and support for Android and web.': 'مسيطر تطبيق تعاوني مبني باستخدام Flutter للمحلات والمشروعات الصغيرة. يجمع إدارة المنتجات والمخزون وفواتير البيع وسجلات العملاء والمبالغ المستحقة في سير عمل منظم، مع واجهات بالعربية والإنجليزية، وثيم فاتح وداكن، ودعم Android والويب.',
    'Masiter is designed to replace scattered paper records with a connected digital workflow for everyday shop and small-business operations. Product and stock information, sales invoices, customer details, purchase history and receivables are organized within one app.': 'يهدف مسيطر إلى استبدال السجلات الورقية المتفرقة بسير عمل رقمي مترابط لإدارة المحلات والمشروعات الصغيرة يوميًا. ينظم التطبيق بيانات المنتجات والمخزون وفواتير البيع وتفاصيل العملاء وسجل المشتريات والمبالغ المستحقة في مكان واحد.',
    'The application is built with Flutter and Dart and is available for Android and the web. It supports Arabic and English, including right-to-left layouts for Arabic, as well as light and dark themes.': 'تم تطوير التطبيق باستخدام Flutter وDart، وهو متاح على Android والويب. ويدعم العربية والإنجليزية، بما في ذلك اتجاه العرض من اليمين إلى اليسار للعربية، بالإضافة إلى الوضعين الفاتح والداكن.',
    'This is a collaborative project developed by': 'هذا مشروع تعاوني تم تطويره بواسطة',
    'and': 'و',
    'Products and inventory:': 'المنتجات والمخزون:',
    'organize products by category and unit, store product images with Supabase Storage, monitor stock and receive low-stock notifications.': 'تنظيم المنتجات حسب التصنيف والوحدة، وحفظ صور المنتجات باستخدام Supabase Storage، ومتابعة المخزون واستقبال إشعارات انخفاض الكمية.',
    'Sales invoices:': 'فواتير البيع:',
    'create and manage sales invoices, export them as PDF, and prepare print layouts for 58 mm thermal, 80 mm thermal and A4 paper.': 'إنشاء فواتير البيع وإدارتها وتصديرها بصيغة PDF وتجهيز تنسيقات للطباعة الحرارية بمقاسات 58 و80 مم وورق A4.',
    'Customers and purchase history:': 'العملاء وسجل المشتريات:',
    'keep customer details and purchase activity together for easier review.': 'حفظ بيانات العملاء وحركة مشترياتهم معًا لتسهيل مراجعتها.',
    'Receivables and debt collection:': 'المستحقات وتحصيل الديون:',
    'track customer balances and apply payments to the oldest outstanding invoice first.': 'متابعة أرصدة العملاء وتوجيه المدفوعات إلى أقدم فاتورة مستحقة أولًا.',
    'Reminders:': 'التذكيرات:',
    'provide low-stock notifications and morning reminders related to outstanding receivables.': 'إرسال إشعارات عند انخفاض المخزون وتذكيرات صباحية بالمستحقات غير المحصّلة.',
    'Business data sharing:': 'مشاركة بيانات النشاط التجاري:',
    'share business data with another account through an email-based sharing mechanism.': 'مشاركة بيانات النشاط التجاري مع حساب آخر من خلال آلية مشاركة تعتمد على البريد الإلكتروني.',
    'Account access:': 'الوصول إلى الحساب:',
    'register and sign in with Firebase Authentication, including email-verification support.': 'إنشاء الحساب وتسجيل الدخول باستخدام Firebase Authentication، مع دعم التحقق من البريد الإلكتروني.',
    'Localization and themes:': 'اللغات والمظهر:',
    'support Arabic and English, RTL layouts, light and dark themes.': 'دعم العربية والإنجليزية واتجاه RTL والوضعين الفاتح والداكن.',
    'Responsive experience:': 'تجربة متجاوبة:',
    'adapt the interface for mobile and web, with cached product images and error handling.': 'تكييف الواجهة للموبايل والويب، مع تخزين صور المنتجات مؤقتًا ومعالجة الأخطاء.',
    'Application': 'التطبيق',
    'State management': 'إدارة الحالة',
    'Dependency injection': 'الحقن الاعتمادي',
    'Responsive UI': 'واجهة متجاوبة',
    'Localization': 'تعدد اللغات',
    'Authentication': 'المصادقة',
    'Cloud database': 'قاعدة بيانات سحابية',
    'Product image storage': 'تخزين صور المنتجات',
    'PDF and printing': 'ملفات PDF والطباعة',
    'Image loading': 'تحميل الصور',
    'Local and secure storage': 'التخزين المحلي والآمن',
    'Web hosting': 'استضافة الويب',
    'The code separates presentation and data responsibilities: BLoC/Cubit manages application and UI state, while GetIt provides dependency injection. GoRouter organizes navigation between screens, and localization resources support English and Arabic interfaces.': 'يفصل الكود بين مسؤوليات العرض والبيانات؛ إذ يدير BLoC/Cubit حالة التطبيق والواجهة، بينما يوفر GetIt خاصية الحقن الاعتمادي. وينظم GoRouter التنقّل بين الشاشات، وتدعم ملفات الترجمة واجهتي العربية والإنجليزية.',
    'Firebase Authentication handles account access, Cloud Firestore provides cloud-backed business data, and Supabase Storage is used for product images. PDF generation and printing libraries support exporting and printing invoices in the intended formats.': 'يتولى Firebase Authentication إدارة الدخول إلى الحسابات، ويوفر Cloud Firestore بيانات النشاط التجاري السحابية، بينما يُستخدم Supabase Storage لحفظ صور المنتجات. كما تدعم مكتبات إنشاء PDF والطباعة تصدير الفواتير وطباعتها بالتنسيقات المطلوبة.',
    'The supplied project README identifies the main source areas as the Flutter application under': 'يحدد ملف README المرفق المجلدات الرئيسية للمشروع، حيث يوجد تطبيق Flutter داخل',
    'reusable assets and translations under': 'والملفات القابلة لإعادة الاستخدام والترجمات داخل',
    'screenshot documentation under': 'وتوثيق لقطات الشاشة داخل',
    'and Firebase configuration at the project root.': 'وإعدادات Firebase في المجلد الرئيسي للمشروع.',
    'Android and Web': 'Android والويب',
    'Arabic and English, including RTL support': 'العربية والإنجليزية، مع دعم RTL',
    'Appearance': 'المظهر',
    'Light and dark themes': 'الوضعان الفاتح والداكن',
    'Invoice printing': 'طباعة الفواتير',
    '58 mm thermal, 80 mm thermal and A4': 'طباعة حرارية 58 مم و80 مم وورق A4',
    'Product images': 'صور المنتجات',
    'Supabase Storage with cached loading in the client': 'Supabase Storage مع التخزين المؤقت عند التحميل',
    'Masiter is a collaborative project with': 'مسيطر مشروع تعاوني مع',
    'The application brings together several connected business workflows, which makes consistency across products, invoices, customer balances, inventory and shared business data an important part of the overall experience.': 'يجمع التطبيق عدة مهام مترابطة لإدارة النشاط التجاري؛ لذلك يُعد الحفاظ على اتساق بيانات المنتجات والفواتير وأرصدة العملاء والمخزون والبيانات المشتركة جزءًا أساسيًا من التجربة.',
    'The project also brings together cross-platform UI development, state management with BLoC/Cubit, cloud authentication and data, image storage, localization and invoice document generation. The case study describes the project-level implementation and does not assign individual ownership of each feature where the supplied project materials do not specify it.': 'يجمع المشروع أيضًا بين تطوير واجهات متعددة المنصات وإدارة الحالة باستخدام BLoC/Cubit والمصادقة والبيانات السحابية وتخزين الصور وتعدد اللغات وإنشاء مستندات الفواتير. وتوضح صفحة المشروع طريقة التنفيذ على مستوى المشروع دون نسبة مسؤولية كل ميزة إلى شخص بعينه عندما لا تحدد ملفات المشروع ذلك.',
    'Android screens across key workflows, languages and themes. Select an image to enlarge it; use the arrow keys to move through the gallery.': 'شاشات Android لأهم مسارات الاستخدام واللغات والثيمات. اختر صورة لتكبيرها، واستخدم أسهم لوحة المفاتيح للتنقّل بين الصور.',
    'Desktop dashboard and invoice screens across English and Arabic, in light and dark themes.': 'شاشات لوحة التحكم والفواتير على سطح المكتب بالعربية والإنجليزية، وبالوضعين الفاتح والداكن.',
    'The Complete Flutter Development Guide': 'الدليل الشامل لتطوير تطبيقات Flutter',
    'Finance app screens and interaction flows for authentication, dashboard metrics, cards, charts and profile views, built with responsive layouts, navigation, charts and carousels.': 'واجهات وتفاعلات تطبيق مالي تشمل تسجيل الدخول ولوحة المؤشرات والبطاقات والرسوم البيانية والملف الشخصي، مع تصميمات متجاوبة وتنقّل ورسوم بيانية وشرائح عرض.',
    'Framework': 'إطار العمل',
    'Networking': 'الاتصال بالشبكة',
    'State management': 'إدارة الحالة',
    'Charts': 'الرسوم البيانية',
    'Layout and widgets': 'التنسيق وعناصر الواجهة',
    'Typeface': 'نوع الخط',
    'UI components': 'عناصر الواجهة',
    'Images': 'الصور',
    'Previous project: Financi App': 'المشروع السابق: Financi',
    'Previous project: News App': 'المشروع السابق: تطبيق الأخبار',
    'Next project: Meals App': 'المشروع التالي: تطبيق الوجبات',
    'Previous project: Meals App': 'المشروع السابق: تطبيق الوجبات',
    'Previous project: E-commerce Application': 'المشروع السابق: تطبيق التجارة الإلكترونية',
    'Next project: Masiter': 'المشروع التالي: مسيطر',
    'Next project: E-commerce Application': 'المشروع التالي: تطبيق التجارة الإلكترونية',
    'Previous project: Masiter': 'المشروع السابق: مسيطر',
    'Next project: Financi': 'المشروع التالي: Financi',
    '01 of 05': '01 من 05',
    '02 of 05': '02 من 05',
    '03 of 05': '03 من 05',
    '04 of 05': '04 من 05',
    '05 of 05': '05 من 05',
    'This is a collaborative project developed by': 'هذا مشروع تعاوني تم تطويره بواسطة',
    'A Flutter shopping application that lets users create an account or sign in, discover products, browse categories, search by title, inspect product details and manage a shopping cart. The app uses REST API data, Cubit/BLoC state management and local storage for cart data and authentication tokens.': 'تطبيق للتسوّق باستخدام Flutter يتيح إنشاء حساب أو تسجيل الدخول واستكشاف المنتجات وتصفح التصنيفات والبحث بالاسم وعرض التفاصيل وإدارة سلة المشتريات. يستخدم التطبيق بيانات REST API وإدارة الحالة باستخدام Cubit/BLoC والتخزين المحلي لبيانات السلة ورموز المصادقة.',
    'A Flutter news application that helps users explore the latest headlines, browse news by category, and search for articles in English and Arabic. It retrieves news data through a REST API and presents articles in a clean, responsive mobile interface.': 'تطبيق أخبار باستخدام Flutter يساعد المستخدمين على استكشاف أحدث العناوين وتصفح الأخبار حسب التصنيف والبحث عن المقالات بالعربية والإنجليزية. يجلب بيانات الأخبار عبر REST API ويعرض المقالات في واجهة موبايل بسيطة ومتجاوبة.',
    'Kirolos Emad — Junior Flutter Developer': 'كيرلس عماد — مطور Flutter مبتدئ',
    'Financi — Kirolos Emad': 'Financi — كيرلس عماد',
    'Meals App — Kirolos Emad': 'تطبيق الوجبات — كيرلس عماد',
    'News App — Kirolos Emad': 'تطبيق الأخبار — كيرلس عماد',
    'E-commerce Application — Kirolos Emad': 'تطبيق التجارة الإلكترونية — كيرلس عماد',
    'Masiter | مسيطر — Kirolos Emad': 'مسيطر — كيرلس عماد',
    'Portfolio of Kirolos Emad, a junior Flutter developer building mobile apps with Dart, REST APIs, local storage and maintainable architecture.': 'معرض أعمال كيرلس عماد، مطور Flutter، ويضم تطبيقات موبايل باستخدام Dart وREST API والتخزين المحلي والمعمارية القابلة للصيانة.',
    'Flutter projects, case studies and CV.': 'مشاريع Flutter ودراسات تفصيلية للمشاريع والسيرة الذاتية.',
    'Masiter is a collaborative Flutter business-management application for shops and small businesses, with inventory, invoices, customers and receivables on Android and web.': 'مسيطر تطبيق تعاوني لإدارة المحلات والمشروعات الصغيرة باستخدام Flutter، ويشمل المخزون والفواتير والعملاء والمستحقات على Android والويب.',
    'A collaborative business-management app built with Flutter, Firebase, Cloud Firestore and Supabase Storage, supporting Android and web.': 'تطبيق تعاوني لإدارة الأعمال مبني باستخدام Flutter وFirebase وCloud Firestore وSupabase Storage، ويدعم Android والويب.',
    'A Flutter shopping application that lets users create an account or sign in, discover products, browse categories, search by title, inspect product details and manage a shopping cart. The app uses REST API data, Cubit/BLoC state management and local storage for cart data and authentication tokens.': 'تطبيق للتسوّق باستخدام Flutter يتيح إنشاء حساب أو تسجيل الدخول واستكشاف المنتجات وتصفح التصنيفات والبحث بالاسم وعرض التفاصيل وإدارة سلة المشتريات. يستخدم التطبيق بيانات REST API وإدارة الحالة باستخدام Cubit/BLoC والتخزين المحلي لبيانات السلة ورموز المصادقة.',
    'A Flutter news application that helps users explore the latest headlines, browse news by category, and search for articles in English and Arabic. It retrieves news data through a REST API and presents articles in a clean, responsive mobile interface.': 'تطبيق أخبار باستخدام Flutter يساعد المستخدمين على استكشاف أحدث العناوين وتصفح الأخبار حسب التصنيف والبحث عن المقالات بالعربية والإنجليزية. يجلب بيانات الأخبار عبر REST API ويعرض المقالات في واجهة موبايل بسيطة ومتجاوبة.',
    'Download Android APK': 'تحميل تطبيق Android (APK)',
    'Arabic RTL · English': 'العربية RTL · الإنجليزية',
    'English and Arabic': 'الإنجليزية والعربية',
    'Local storage': 'التخزين المحلي',
    'UI utilities': 'أدوات الواجهة',
    'SQLite local storage': 'SQLite للتخزين المحلي',
    'Image URLs;': 'روابط الصور؛',
    'is declared in': 'مُدرج في',
    'The cart repository saves cart items as JSON in': 'يحفظ Repository الخاص بالسلة عناصرها بصيغة JSON داخل',
    ', including product ID, title, price, image URL and quantity. Access and refresh tokens returned after login are stored using': '، بما يشمل معرّف المنتج واسمه وسعره ورابط صورته وكميته. كما تُحفَظ رموز الوصول والتحديث الناتجة عن تسجيل الدخول باستخدام',
    '. Products and categories are retrieved from the remote API.': '. ويتم جلب المنتجات والتصنيفات من API الخارجي.',
    ', reusable assets and translations under': '، والملفات القابلة لإعادة الاستخدام والترجمات داخل',
    '. The current implementation uses a local table named `tasks` with fields for the meal title, rating, time, description and image URL.': '. ويستخدم التنفيذ الحالي جدولًا محليًا باسم `tasks` يحتوي على حقول لاسم الوجبة والتقييم والوقت والوصف ورابط الصورة.',
    'Screens captured from the Android emulator. Select any image to enlarge it, or use the arrow keys to move through the gallery.': 'لقطات شاشة من محاكي Android. اختر أي صورة لتكبيرها، أو استخدم أسهم لوحة المفاتيح للتنقّل بين الصور.',
    '/ Masiter | مسيطر · 01 of 05': '/ مسيطر · 01 من 05',
    '/ E-commerce Application · 02 of 05': '/ تطبيق التجارة الإلكترونية · 02 من 05',
    '/ News App · 03 of 05': '/ تطبيق الأخبار · 03 من 05',
    '/ Meals App · 04 of 05': '/ تطبيق الوجبات · 04 من 05',
    '/ Financi · 05 of 05': '/ Financi · 05 من 05',
    'Screenshot viewer': 'عارض لقطات الشاشة',
    'Masiter business management app case study': 'تفاصيل مشروع مسيطر لإدارة الأعمال',
    'E-commerce Application case study': 'تفاصيل مشروع التجارة الإلكترونية',
    'News App case study': 'تفاصيل مشروع الأخبار',
    'Meals App case study': 'تفاصيل مشروع الوجبات',
    'Financi case study': 'تفاصيل مشروع Financi',
    'Kirolos Emad in a green T-shirt, leaning on a silver car with its door open': 'كيرلس عماد يرتدي قميصًا أخضر ويقف بجوار سيارة فضية وبابها مفتوح',
    'Masiter mobile dashboard in English light theme': 'لوحة تحكم مسيطر على الموبايل بالإنجليزية والوضع الفاتح',
    'Masiter mobile invoice history in English light theme': 'سجل فواتير مسيطر على الموبايل بالإنجليزية والوضع الفاتح',
    'Masiter mobile dashboard in Arabic': 'لوحة تحكم مسيطر على الموبايل بالعربية',
    'E-commerce app product discovery screen': 'شاشة استكشاف المنتجات في تطبيق التجارة الإلكترونية',
    'E-commerce app product details screen': 'شاشة تفاصيل المنتج في تطبيق التجارة الإلكترونية',
    'E-commerce app shopping cart screen': 'شاشة سلة المشتريات في تطبيق التجارة الإلكترونية',
    'Meals App home screen showing saved meals': 'الشاشة الرئيسية لتطبيق الوجبات وتعرض الوجبات المحفوظة',
    'Meals App add meal form': 'نموذج إضافة وجبة في تطبيق الوجبات',
    'Meals App meal details screen': 'شاشة تفاصيل الوجبة في تطبيق الوجبات',
    'News App home screen': 'الشاشة الرئيسية لتطبيق الأخبار',
    'News App English search results': 'نتائج البحث بالإنجليزية في تطبيق الأخبار',
    'News App Arabic search results': 'نتائج البحث بالعربية في تطبيق الأخبار',
    'Android screens across key workflows, languages and themes. Select an image to enlarge it; use the arrow keys to move through the gallery.': 'شاشات Android لأهم مسارات الاستخدام واللغات والثيمات. اختر صورة لتكبيرها، واستخدم أسهم لوحة المفاتيح للتنقّل بين الصور.',
    'Desktop dashboard and invoice screens across English and Arabic, in light and dark themes.': 'شاشات لوحة التحكم والفواتير على سطح المكتب بالعربية والإنجليزية، وبالوضعين الفاتح والداكن.',
    'Products and inventory:': 'المنتجات والمخزون:',
    'Customers and purchase history:': 'العملاء وسجل المشتريات:',
    'Receivables and debt collection:': 'المستحقات وتحصيل الديون:',
    'Business data sharing:': 'مشاركة بيانات النشاط التجاري:',
    'Account access:': 'الوصول إلى الحساب:',
    'Responsive experience:': 'تجربة متجاوبة:',
    'The app stores meal details on the device using': 'يحفظ التطبيق تفاصيل الوجبات على الجهاز باستخدام',
    'stores the onboarding-seen state. Remote meal images require an internet connection to load.': 'لحفظ حالة مشاهدة شاشة الترحيب. ويتطلب تحميل صور الوجبات من روابط خارجية وجود اتصال بالإنترنت.',
    'Search results': 'نتائج البحث',
    'GET /products': 'GET /products',
    'GET /categories': 'GET /categories',
    'GET /categories/{id}/products': 'GET /categories/{id}/products',
    'GET /products?title={query}': 'GET /products?title={query}',
    'POST /users': 'POST /users',
    'E-commerce App: login screen with username and password fields.': 'تطبيق التجارة الإلكترونية: شاشة تسجيل الدخول التي تحتوي على حقلي اسم المستخدم وكلمة المرور.',
    'E-commerce App: create-account form with full name, username, password and confirmation fields.': 'تطبيق التجارة الإلكترونية: نموذج إنشاء حساب جديد ويحتوي على الاسم الكامل واسم المستخدم وكلمة المرور وتأكيدها.',
    'E-commerce App: discover screen showing product search, category filters and a product grid.': 'تطبيق التجارة الإلكترونية: شاشة استكشاف المنتجات وتعرض البحث والتصفية حسب التصنيف وشبكة المنتجات.',
    'E-commerce App: product details with image, rating, description, price and add-to-cart action.': 'تطبيق التجارة الإلكترونية: تفاصيل المنتج مع الصورة والتقييم والوصف والسعر وخيار الإضافة إلى السلة.',
    'E-commerce App: shopping cart with item quantity controls, a summary and checkout entry point.': 'تطبيق التجارة الإلكترونية: سلة المشتريات مع أدوات التحكم في الكمية وملخص الطلب وخيار إتمام الشراء.',
    'E-commerce App: account menu with orders, details, address book, FAQs and help center entries.': 'تطبيق التجارة الإلكترونية: قائمة الحساب وتضم الطلبات والبيانات ودفتر العناوين والأسئلة الشائعة ومركز المساعدة.',
    'E-commerce App: address book showing sample saved addresses.': 'تطبيق التجارة الإلكترونية: دفتر العناوين ويعرض عناوين محفوظة تجريبية.',
    'Financi: Onboarding screen with Login and Register.': 'Financi: شاشة ترحيبية تحتوي على خياري تسجيل الدخول وإنشاء حساب.',
    'Financi: Login form with Forgot password and Register links and social buttons.': 'Financi: نموذج تسجيل الدخول مع روابط استعادة كلمة المرور وإنشاء حساب وأزرار التواصل الاجتماعي.',
    'Financi: Register screen with four fields and a Register button.': 'Financi: شاشة إنشاء حساب تحتوي على أربعة حقول وزر التسجيل.',
    'Financi: Forgot password screen with a short description, an email field and a Send code button.': 'Financi: شاشة استعادة كلمة المرور وتحتوي على وصف مختصر وحقل البريد الإلكتروني وزر إرسال الرمز.',
    'Financi: Verification code screen with four PIN boxes and a Verify button.': 'Financi: شاشة رمز التحقق وتحتوي على أربعة مربعات للرمز وزر التحقق.',
    'Financi: New password screen with New and Confirm fields and a Reset Password button.': 'Financi: شاشة كلمة المرور الجديدة وتحتوي على حقلي كلمة المرور والتأكيد وزر إعادة التعيين.',
    'Financi: Success screen with a Back to Login button.': 'Financi: شاشة النجاح وتحتوي على زر العودة إلى تسجيل الدخول.',
    'Financi: Home screen with a welcome message, a card carousel, and Send Money and Pay The Bill actions.': 'Financi: الشاشة الرئيسية وتحتوي على رسالة ترحيب وشرائح للبطاقات وخياري إرسال الأموال ودفع الفاتورة.',
    'Financi: Statistics screen with a January–May bar chart showing income and outcome.': 'Financi: شاشة الإحصائيات وتحتوي على رسم بياني للأعمدة من يناير إلى مايو يوضح الدخل والمصروفات.',
    'Financi: All cards screen with large cards showing full details and a VISA mark.': 'Financi: شاشة كل البطاقات وتعرض بطاقات كبيرة بتفاصيل كاملة وشعار VISA.',
    'Financi: Profile screen with personal details and a Logout button.': 'Financi: شاشة الملف الشخصي وتحتوي على البيانات الشخصية وزر تسجيل الخروج.',
    'Masiter mobile dashboard: English, light theme.': 'لوحة تحكم مسيطر على الموبايل: الإنجليزية، الوضع الفاتح.',
    'Masiter mobile dashboard: English, dark theme.': 'لوحة تحكم مسيطر على الموبايل: الإنجليزية، الوضع الداكن.',
    'Masiter mobile dashboard: Arabic, light theme, with RTL layout.': 'لوحة تحكم مسيطر على الموبايل: العربية، الوضع الفاتح، واتجاه RTL.',
    'Masiter mobile invoice history: English, light theme.': 'سجل فواتير مسيطر على الموبايل: الإنجليزية، الوضع الفاتح.',
    'Masiter mobile invoice history: English, dark theme.': 'سجل فواتير مسيطر على الموبايل: الإنجليزية، الوضع الداكن.',
    'Masiter mobile product and inventory list: English, light theme.': 'قائمة المنتجات والمخزون في مسيطر على الموبايل: الإنجليزية، الوضع الفاتح.',
    'Masiter mobile product and inventory list: English, dark theme.': 'قائمة المنتجات والمخزون في مسيطر على الموبايل: الإنجليزية، الوضع الداكن.',
    'Masiter mobile customers list: English, light theme.': 'قائمة العملاء في مسيطر على الموبايل: الإنجليزية، الوضع الفاتح.',
    'Masiter mobile customers list: English, dark theme.': 'قائمة العملاء في مسيطر على الموبايل: الإنجليزية، الوضع الداكن.',
    'Masiter mobile settings: English, light theme.': 'إعدادات مسيطر على الموبايل: الإنجليزية، الوضع الفاتح.',
    'Masiter mobile settings: English, dark theme.': 'إعدادات مسيطر على الموبايل: الإنجليزية، الوضع الداكن.',
    'Masiter web dashboard: English, light theme.': 'لوحة تحكم مسيطر على الويب: الإنجليزية، الوضع الفاتح.',
    'Masiter web dashboard: English, dark theme.': 'لوحة تحكم مسيطر على الويب: الإنجليزية، الوضع الداكن.',
    'Masiter web dashboard: Arabic, light theme.': 'لوحة تحكم مسيطر على الويب: العربية، الوضع الفاتح.',
    'Masiter web dashboard: Arabic, dark theme.': 'لوحة تحكم مسيطر على الويب: العربية، الوضع الداكن.',
    'Masiter web invoice history: English, light theme.': 'سجل فواتير مسيطر على الويب: الإنجليزية، الوضع الفاتح.',
    'Masiter web invoice history: English, dark theme.': 'سجل فواتير مسيطر على الويب: الإنجليزية، الوضع الداكن.',
    'Meals App: onboarding carousel introducing the app.': 'تطبيق الوجبات: شريط ترحيبي يعرّف المستخدم بالتطبيق.',
    'Meals App: home screen with saved meals in a two-column grid and an add button.': 'تطبيق الوجبات: الشاشة الرئيسية وتعرض الوجبات المحفوظة في شبكة من عمودين وزر الإضافة.',
    'Meals App: form for entering the meal title, image URL, rating, time and description.': 'تطبيق الوجبات: نموذج لإدخال اسم الوجبة ورابط الصورة والتقييم والوقت والوصف.',
    'Meals App: detailed view showing the meal image, preparation time, rating and description.': 'تطبيق الوجبات: شاشة التفاصيل وتعرض صورة الوجبة ووقت التحضير والتقييم والوصف.',
    'News App: home screen displaying headlines and news categories.': 'تطبيق الأخبار: الشاشة الرئيسية وتعرض العناوين وتصنيفات الأخبار.',
    'News App: search screen for entering news keywords.': 'تطبيق الأخبار: شاشة البحث لإدخال الكلمات المفتاحية للأخبار.',
    'News App: search results displayed in English.': 'تطبيق الأخبار: نتائج البحث معروضة باللغة الإنجليزية.',
    'News App: search results displayed in Arabic.': 'تطبيق الأخبار: نتائج البحث معروضة باللغة العربية.',
    'POST /auth/login': 'POST /auth/login',
    ', screenshot documentation under': '، وتوثيق لقطات الشاشة داخل',
    ', and Firebase configuration at the project root.': '، وإعدادات Firebase في المجلد الرئيسي للمشروع.',
    '. The application brings together several connected business workflows, which makes consistency across products, invoices, customer balances, inventory and shared business data an important part of the overall experience.': '. يجمع التطبيق عدة مهام مترابطة لإدارة النشاط التجاري؛ لذلك يُعد الحفاظ على اتساق بيانات المنتجات والفواتير وأرصدة العملاء والمخزون والبيانات المشتركة جزءًا أساسيًا من التجربة.',
    'SharedPreferences · Secure Storage': 'SharedPreferences · التخزين الآمن',
    'SQLite (': 'SQLite (',
    'Kirolos Emad · ©': 'كيرلس عماد · ©',
    'Finance app screens and interaction flows for authentication, dashboard metrics, cards, charts and profile views, built with responsive layouts, navigation, charts and carousels.': 'واجهات وتفاعلات تطبيق مالي تشمل المصادقة ولوحة المؤشرات والبطاقات والرسوم البيانية والملف الشخصي، مع تصميمات متجاوبة وتنقّل ورسوم بيانية وشرائح عرض.'

  };

  const attrNames = ['alt', 'aria-label', 'data-cap', 'title'];
  const textRecords = [];
  const attrRecords = [];
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const preserveEdges = (original, translated) => {
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    return leading + translated + trailing;
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.nodeValue.trim() || node.parentElement?.closest('script, style, noscript')) continue;
    textRecords.push({ node, original: node.nodeValue });
  }

  document.querySelectorAll('*').forEach(element => {
    attrNames.forEach(name => {
      if (element.hasAttribute(name)) attrRecords.push({ element, name, original: element.getAttribute(name) });
    });
  });

  const originalTitle = document.title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const originalDescription = descriptionMeta?.content || '';
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const originalOgTitle = ogTitleMeta?.content || '';
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const originalOgDescription = ogDescriptionMeta?.content || '';
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const navInner = document.querySelector('.nav-inner');
  let currentLanguage = 'en';
  let currentTheme = 'light';
  let themeButton;
  let languageButton;

  const icons = {
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
  };

  function applyLanguage(language) {
    currentLanguage = language === 'en' ? 'en' : 'ar';
    root.lang = currentLanguage;
    root.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    textRecords.forEach(({ node, original }) => {
      if (!node.isConnected) return;
      if (currentLanguage === 'ar') {
        const translated = ar[normalize(original)];
        if (translated) node.nodeValue = preserveEdges(original, translated);
        else node.nodeValue = original;
      } else {
        node.nodeValue = original;
      }
    });

    attrRecords.forEach(({ element, name, original }) => {
      if (!element.isConnected) return;
      const translated = currentLanguage === 'ar' ? ar[normalize(original)] : null;
      element.setAttribute(name, translated ? preserveEdges(original, translated) : original);
    });

    document.title = currentLanguage === 'ar' ? (ar[originalTitle] || originalTitle) : originalTitle;
    if (descriptionMeta) descriptionMeta.content = currentLanguage === 'ar'
      ? (ar[originalDescription] || originalDescription)
      : originalDescription;
    if (ogTitleMeta) ogTitleMeta.content = currentLanguage === 'ar' ? (ar[originalOgTitle] || originalOgTitle) : originalOgTitle;
    if (ogDescriptionMeta) ogDescriptionMeta.content = currentLanguage === 'ar' ? (ar[originalOgDescription] || originalOgDescription) : originalOgDescription;

    if (languageButton) {
      languageButton.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
      languageButton.setAttribute('aria-label', currentLanguage === 'ar' ? 'Switch language to English' : 'التبديل إلى اللغة العربية');
      languageButton.title = currentLanguage === 'ar' ? 'English' : 'العربية';
    }
    try { localStorage.setItem(storageKeys.language, currentLanguage); } catch (_) { /* Storage can be unavailable in private browsing. */ }
  }

  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = currentTheme;
    if (themeMeta) themeMeta.content = currentTheme === 'dark' ? '#111A18' : '#ECEBE3';
    if (themeButton) {
      themeButton.innerHTML = currentTheme === 'dark' ? icons.sun : icons.moon;
      themeButton.setAttribute('aria-label', currentLanguage === 'ar'
        ? (currentTheme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن')
        : (currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'));
      themeButton.title = themeButton.getAttribute('aria-label');
    }
    try { localStorage.setItem(storageKeys.theme, currentTheme); } catch (_) { /* Storage can be unavailable in private browsing. */ }
  }

  if (navInner) {
    const controls = document.createElement('div');
    controls.className = 'nav-controls';
    controls.setAttribute('aria-label', 'Display preferences');

    themeButton = document.createElement('button');
    themeButton.type = 'button';
    themeButton.className = 'nav-control theme-control';
    themeButton.addEventListener('click', () => applyTheme(currentTheme === 'light' ? 'dark' : 'light'));

    languageButton = document.createElement('button');
    languageButton.type = 'button';
    languageButton.className = 'nav-control language-control';
    languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar'));

    controls.append(themeButton, languageButton);
    navInner.appendChild(controls);
  }

  let savedLanguage = 'en';
  let savedTheme = 'light';
  try {
    savedLanguage = localStorage.getItem(storageKeys.language) || 'en';
    savedTheme = localStorage.getItem(storageKeys.theme) || 'light';
  } catch (_) { /* Use the requested English/light defaults when storage is unavailable. */ }

  applyLanguage(savedLanguage);
  applyTheme(savedTheme);
})();
