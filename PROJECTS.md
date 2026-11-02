# Projects

Source of truth: the CV. Financi also uses the notes and screenshots from the supplied project zip.

| # | Project | Stack (CV) | Page | Screenshots |
|---|---------|-----------|------|-------------|
| 01 | Financi | Flutter, Dart, GoRouter, fl_chart | `project-financi.html` | 11 real (Android emulator) |
| 02 | Meals App | Flutter, Dart, Sqflite, SharedPreferences, GoRouter | `project-meals-app.html` | 4 real (Android emulator) |
| 03 | News App | Flutter, Dart, REST APIs, Dio, GoRouter, Flutter ScreenUtil | `project-news-app.html` | 4 real (Android emulator) |
| 04 | E-commerce Application | Flutter, Dart, REST API, Dio, Cubit/BLoC, GoRouter, SharedPreferences | `project-e-commerce-application.html` | 7 real (Android emulator) |
| 05 | Masiter | Flutter, Dart, BLoC/Cubit, Firebase, Cloud Firestore, Supabase Storage | `project-masiter.html` | 11 mobile + 6 web screenshots |

## Adding or editing a project
Each project is one repeated pattern: an `<article class="project-card">` in `index.html` and a `project-<slug>.html` page. Copy an existing pair, rename the slug, and edit the text. Screenshots go in `assets/projects/<slug>/`; gallery buttons use `data-full` (large image) and `data-cap` (caption). Project README files are linked from each case-study page.
