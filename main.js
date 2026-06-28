/* ── i18n ─────────────────────────────────────────────────── */
const translations = {
  en: {
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.about': 'Profile',
    'nav.cta': 'Get in Touch',
    'hero.label': 'LiberWerk Advisory',
    'hero.line1': 'Engineering Leadership,',
    'hero.line2': 'Redefined.',
    'hero.sub': 'I help startups and technology companies build world-class engineering organisations — as an advisor, fractional CTO, or VP of Engineering.',
    'hero.availability': 'Available for Q3 2026 engagements',
    'hero.cta1': 'Work with Me',
    'hero.cta2': 'See Services',
    'stats.dau': 'Daily Active Users',
    'stats.dau.ctx': 'Japan\'s first unicorn C2C platform',
    'stats.slo': 'Service Availability',
    'stats.slo.ctx': 'SLO-driven at hyperscale',
    'stats.engineers': 'Engineers Managed',
    'stats.engineers.ctx': 'At peak as CTO, TSE-listed',
    'stats.growth': 'Org Growth Delivered',
    'stats.growth.ctx': 'Engineering org built from scratch',
    'stats.products.num': 'B2B · C2C · B2B2C',
    'stats.products': 'Product Models',
    'stats.products.ctx': 'Cross-domain product leadership',
    'stats.career.num': 'SWE → EM → CTO',
    'stats.career': 'Engineer-born Executive',
    'stats.career.ctx': 'Wrote the code. Built the team. Led the org.',
    'stats.scale': 'System Scalability',
    'stats.scale.ctx': 'Hyperscale architecture, SRE-led',
    'stats.langs.num': 'EN · JP · KR',
    'stats.langs': 'Working Languages',
    'stats.langs.ctx': 'Trilingual leadership',
    'svc.fit.label': 'Best suited for',
    'svc.cto.fit': 'Seed to Series A startups without a full-time CTO',
    'svc.vpe.fit': 'Series A–C companies scaling an engineering team rapidly',
    'svc.advisory.fit': 'Founders and engineering leaders who want a trusted technical sounding board',
    'svc.devops.fit': 'Teams with slow deploys, fragile pipelines, or monolith migration plans',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How quickly can an engagement start?',
    'faq.a1': 'Typically within two to four weeks of an initial conversation. I keep capacity for one to two engagements at a time, so it is worth reaching out early if you have a specific timeline.',
    'faq.q2': 'Do you work with companies outside Japan?',
    'faq.a2': 'Yes. I work remotely with companies across the Asia-Pacific region and internationally. Most engagements are conducted in English, Japanese, or Korean depending on the team.',
    'faq.q3': 'What does a typical week look like for a retainer engagement?',
    'faq.a3': 'It varies by need. Common patterns include weekly leadership syncs, architecture review sessions, async reviews of PRDs or RFCs, and availability for ad-hoc questions via Slack or email. We agree on a rhythm at the start.',
    'faq.q4': 'Can I start with a one-off session before committing?',
    'faq.a4': 'Yes. A scoped discovery session is available to assess fit and define a concrete engagement scope before any retainer commitment.',
    'faq.q5': 'What industries do you focus on?',
    'faq.a5': 'Consumer technology, B2B SaaS, and marketplace platforms. My background spans C2C, B2B, and B2B2C product environments — I am particularly effective in cross-cultural and international engineering contexts.',
    'services.tag': 'What I Offer',
    'services.title': 'Advisory Services',
    'services.sub': 'Tailored engagements for companies at every stage of engineering growth.',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': 'Fractional CTO engagement for early-stage startups that need executive technical leadership without a full-time hire. Strategy, architecture, and team building.',
    'svc.cto.format': 'Monthly retainer',
    'svc.cto.duration': '3 months+',
    'svc.vpe.title': 'VP of Engineering Consulting',
    'svc.vpe.desc': 'Scaling engineering organisations from 5 to 50+. Hiring frameworks, performance management, org design, and cross-functional alignment.',
    'svc.vpe.format': 'Project-based',
    'svc.vpe.duration': 'Flexible',
    'svc.advisory.title': 'Technical Advisory',
    'svc.advisory.desc': 'Long-term advisory for founders and engineering leaders. Architecture review, technology strategy, and hands-on mentorship.',
    'svc.advisory.format': 'Monthly retainer',
    'svc.advisory.duration': 'Ongoing',
    'svc.devops.title': 'Engineering Process & CI/CD',
    'svc.devops.desc': 'Microservices architecture, DevOps transformation, and CI/CD optimisation. Built on experience from Mercari and CircleCI.',
    'svc.devops.format': 'Spot / Project',
    'svc.devops.duration': '1–3 months',
    'svc.hiring.title': 'Engineering Talent & Hiring',
    'svc.hiring.desc': 'Full-cycle engineering hiring — from strategy to execution. Job description design, interview process architecture, hands-on technical interviewing, and recruiter network access to source Software Engineers, Engineering Managers, Tech Leads, and VPoEs.',
    'svc.hiring.format': 'End-to-end',
    'svc.hiring.duration': 'Project-based',
    'svc.hiring.network': 'Recruiter Network',
    'proof.tag': 'Talks & Publications',
    'proof.title': 'In Public',
    'proof.type.conf': 'Conference',
    'proof.type.blog': 'Blog',
    'proof.type.oss': 'Open Source',
    'proof.gophercon.title': 'GopherCon',
    'proof.grpcconf.title': 'gRPC Conf',
    'proof.mercariblog.title': 'Mercari Engineering Blog',
    'proof.uberstyle.title': 'Uber Go Style Guide (KR)',
    'proof.gophercon': 'Presented on Go and microservices architecture at Mercari scale.',
    'proof.grpcconf': 'Spoke on gRPC and Protobuf adoption in production microservices.',
    'proof.mercariblog': 'Published technical articles on microservices, Go, and engineering culture.',
    'proof.uberstyle': 'Korean translation of the Uber Go Style Guide — widely referenced in the Korean Go community.',
    'exp.tag': 'Background',
    'exp.title': 'Experience',
    'badge.current': 'Current',
    'role.liberwerk.advisory': 'Advisory',
    'role.liberwerk.researcher': 'Independent Researcher',
    'role.thecoo.cto': 'Chief Technology Officer',
    'role.thecoo.hoe': 'Head of Engineering Division',
    'role.thecoo.sem': 'Senior Engineering Manager',
    'role.thecoo.em': 'Engineering Manager',
    'role.circleci.se': 'Solutions Engineer',
    'role.mercari.sse': 'Senior Software Engineer',
    'role.mercari.se': 'Software Engineer',
    'role.eventacular.se': 'Software Engineer (Intern)',
    'exp.mantra': 'Providing strategic technical advisory directly to the CTO, supporting architecture decisions and engineering leadership.',
    'exp.liberwerk': 'Engineering leadership advisory and independent research through my own practice. CTO-as-a-Service, VP of Engineering consulting, and startup technical advisory.',
    'exp.thecoo': 'Progressed from Engineering Manager to CTO over 2.5 years. As CTO and Head of Engineering, oversaw ~40 employees across Product Engineering, Product Management, SRE, Corporate Engineering, QA, and New Product divisions.',
    'exp.circleci': 'Led CI/CD design and process improvement with enterprise companies across APAC. Drove technical pre-sales and customer integrations.',
    'exp.mercari': 'Designed and built microservices for an 8M+ DAU platform. Migrated PHP monolith to Go/gRPC. Presented at GopherCon and gRPC Conf. Led internal engineering training programmes.',
    'exp.eventacular': 'Developed web service frontend with React.js/Relay and backend with Phoenix (Elixir) and GraphQL.',
    'exp.onecareer': 'Leading engineering management across multiple product domains, supporting Engineering Managers and cross-functional engineering teams across B2B and B2C products.',
    'photo.title': 'Engineering Advisor · Tokyo',
    'about.tag': 'Advisor Profile',
    'about.title': 'Who I Am',
    'about.p1': 'I am a trilingual engineering leader based in Japan with hands-on experience scaling a C2C platform to 9.5M+ daily active users, growing engineering organisations 4–5×, and leading ~50 engineers as CTO — across B2B, C2C, and B2B2C product environments.',
    'about.p2': 'Through LiberWerk, I channel that experience into advisory engagements — helping founders and engineering leaders scale teams, modernise engineering culture, and build organisations that ship with speed and reliability.',
    'about.p3': 'My approach is direct and practical: I bring the pattern recognition from having actually done it — not generic consulting playbooks.',
    'pillar.leadership': 'Leadership & Org Scaling',
    'pillar.leadership.desc': 'IC → CTO across multiple companies. Grew engineering orgs 4–5×, managed ~50 direct and indirect reports, built hiring and performance frameworks from scratch.',
    'pillar.architecture': 'Architecture & Reliability',
    'pillar.architecture.desc': 'Designed and scaled systems from 10K to 500K+ users. Microservices, Go/gRPC, SLO/SRE practices, CI/CD — built for real production scale.',
    'pillar.culture': 'Culture & Internationalisation',
    'pillar.culture.desc': 'Transformed High Context Japanese engineering culture to Low Context international standards — English-first documentation, modern dev processes, cross-cultural team building across JP/KR/global.',
    'sidebar.education': 'Education',
    'sidebar.certificates': 'Certificates & Programmes',
    'sidebar.languages': 'Languages',
    'sidebar.based': 'Based in',
    'sidebar.location': 'Tokyo, Japan',
    'edu.master': 'Master of Engineering',
    'edu.bachelor': 'Bachelor of Science, Computer Science',
    'edu.tokyotech.cert': 'Certificate Programme, Management of Technology',
    'contact.tag': 'Let\'s Talk',
    'contact.title': 'Start an Engagement',
    'contact.sub': 'Whether you need a fractional CTO, a technical advisor, or a sounding board for engineering strategy — I\'d be glad to hear from you.',
    'contact.alt.label': 'Prefer email directly?',
    'contact.alt.reveal': 'Show email address',
    'form.name': 'Name',
    'form.name.placeholder': 'Your name',
    'form.company': 'Company',
    'form.company.placeholder': 'Company (optional)',
    'form.email': 'Your Email',
    'form.email.placeholder': 'you@example.com',
    'form.service': 'Service of Interest',
    'form.service.default': 'Select a service…',
    'form.service.other': 'Other / Not sure yet',
    'form.message': 'Message',
    'form.message.placeholder': 'Tell me a bit about your situation and what you\'re looking for…',
    'form.submit': 'Send Message',
    'form.success': 'Message sent — I\'ll be in touch shortly.',
    'form.error': 'Something went wrong. Please try again or use email directly.',
    'cf.step1.eyebrow': 'Step 1 of 2',
    'cf.step1.title': 'What can I help you with?',
    'cf.step1.sub': 'Select the area that best matches your situation.',
    'cf.svc.cto.title': 'CTO-as-a-Service',
    'cf.svc.cto.desc': 'Need executive technical leadership without a full-time hire',
    'cf.svc.vpe.title': 'VP of Engineering Consulting',
    'cf.svc.vpe.desc': 'Looking to scale or restructure your engineering organisation',
    'cf.svc.advisory.title': 'Technical Advisory',
    'cf.svc.advisory.desc': 'Want ongoing mentorship, architecture review, or tech strategy',
    'cf.svc.chat.title': 'Just a Quick Chat',
    'cf.svc.chat.desc': 'Not sure yet — just want to explore what\'s possible',
    'cf.svc.hiring.title': 'Engineering Talent & Hiring',
    'cf.svc.hiring.desc': 'Full-cycle hiring design, technical interviewing, and recruiter network to find SE / EM / TL / VPoE',
    'cf.back': 'Back',
    'cf.step2.eyebrow': 'Step 2 of 2',
    'cf.field.name': 'Name',
    'cf.field.company': 'Company',
    'cf.field.email': 'Your Email',
    'cf.field.message': 'Tell me about your situation',
    'cf.cto.teamsize': 'Current team size',
    'cf.cto.challenge': 'Most urgent challenge',
    'cf.cto.frequency': 'Preferred engagement frequency',
    'cf.vpe.orgsize': 'Engineering org size',
    'cf.vpe.focus': 'Primary focus area',
    'cf.advisory.type': 'Advisory type',
    'cf.hiring.role': 'Role(s) to hire',
    'cf.hiring.scope': 'Scope of support needed',
    'cf.hiring.timeline': 'Hiring timeline',
    'cf.chip.hiring': 'Hiring',
    'cf.chip.arch': 'Architecture',
    'cf.chip.process': 'Process / CI/CD',
    'cf.chip.strategy': 'Tech strategy',
    'cf.chip.weekly': 'Weekly',
    'cf.chip.biweekly': 'Bi-weekly',
    'cf.chip.monthly': 'Monthly',
    'cf.chip.flexible': 'Flexible',
    'cf.chip.orgdesign': 'Org design',
    'cf.chip.hiringfw': 'Hiring framework',
    'cf.chip.perfmgmt': 'Performance mgmt',
    'cf.chip.culture': 'Culture / Values',
    'cf.chip.mentorship': 'Leadership mentorship',
    'cf.chip.techstrategy': 'Tech strategy',
    'cf.chip.other': 'Other',
    'cf.chip.swe': 'Software Engineer',
    'cf.chip.em': 'Engineering Manager',
    'cf.chip.tl': 'Tech Lead',
    'cf.chip.vpe.cto': 'VPoE / CTO',
    'cf.chip.designonly': 'Process design only',
    'cf.chip.designinterview': 'Design + interviewing',
    'cf.chip.fullagent': 'Full agent (sourcing + hiring)',
    'cf.chip.asap': 'ASAP',
    'cf.chip.onetothree': '1–3 months',
    'cf.chip.threemo': '3 months+',
    'cf.submit': 'Send Enquiry',
    'cf.disclaimer': 'I typically respond within 3 business days.',
    'cf.success.title': 'Enquiry received.',
    'cf.success.sub': 'I\'ll review your message and be in touch within 3 business days.',
    'cf.success.back': 'Back to LiberWerk',
    'footer.note': 'Engineering Leadership Advisory',
  },
  ja: {
    'nav.services': 'サービス',
    'nav.experience': '経歴',
    'nav.about': 'プロフィール',
    'nav.cta': 'お問い合わせ',
    'hero.label': 'LiberWerk アドバイザリー',
    'hero.line1': 'エンジニアリングリーダーシップを、',
    'hero.line2': '再定義する。',
    'hero.sub': 'スタートアップ・テック企業のエンジニアリング組織づくりをサポートします。アドバイザー、フラクショナルCTO、VPoEとして。',
    'hero.availability': '2026年Q3のご依頼受付中',
    'hero.cta1': '相談する',
    'hero.cta2': 'サービスを見る',
    'stats.dau': '日次アクティブユーザー',
    'stats.dau.ctx': '日本初ユニコーンC2Cプラットフォーム',
    'stats.slo': 'サービス可用性',
    'stats.slo.ctx': 'ハイパースケールでのSLO運用',
    'stats.engineers': 'エンジニア統括数',
    'stats.engineers.ctx': 'CTO時のピーク、東証上場企業',
    'stats.growth': '組織成長率',
    'stats.growth.ctx': 'エンジニアリング組織をゼロから構築',
    'stats.products.num': 'B2B · C2C · B2B2C',
    'stats.products': 'プロダクトモデル',
    'stats.products.ctx': '複数ドメインでのプロダクト開発経験',
    'stats.career.num': 'SWE → EM → CTO',
    'stats.career': 'エンジニア出身エグゼクティブ',
    'stats.career.ctx': 'コードを書き、チームを作り、組織を率いた',
    'stats.scale': 'システム スケーラビリティ',
    'stats.scale.ctx': 'ハイパースケールアーキテクチャ、SRE主導',
    'stats.langs.num': 'EN · JP · KR',
    'stats.langs': '業務使用言語',
    'stats.langs.ctx': 'トリリンガルリーダーシップ',
    'svc.fit.label': 'こんな方に最適',
    'svc.cto.fit': 'フルタイムCTOがいないシード〜シリーズAのスタートアップ',
    'svc.vpe.fit': 'エンジニアリング組織を急拡大中のシリーズA〜C企業',
    'svc.advisory.fit': '信頼できる技術的サウンディングボードを求める創業者・エンジニアリングリーダー',
    'svc.devops.fit': 'デプロイが遅い、パイプラインが脆弱、またはモノリス移行を検討しているチーム',
    'faq.title': 'よくある質問',
    'faq.q1': 'エンゲージメント開始までどれくらいかかりますか？',
    'faq.a1': '初回面談から通常2〜4週間以内に開始できます。同時に1〜2件の案件を担当しているため、スケジュールが決まっている場合は早めにご連絡ください。',
    'faq.q2': '日本国外の企業とも仕事ができますか？',
    'faq.a2': 'はい。アジア太平洋地域および海外の企業とリモートで取り組んでいます。エンゲージメントは英語・日本語・韓国語で対応可能です。',
    'faq.q3': 'リテイナー契約での典型的な週の動きはどのようなものですか？',
    'faq.a3': 'ニーズによって異なります。一般的なパターンとしては、週次リーダーシップ同期、アーキテクチャレビューセッション、PRD/RFCの非同期レビュー、SlackやメールでのアドホックQ&A対応などがあります。開始時に進め方を合意します。',
    'faq.q4': 'コミットする前に単発セッションから始めることはできますか？',
    'faq.a4': 'はい。スコープを定めた探索セッションを提供しており、リテイナー契約の前にフィット感を確認し、具体的なエンゲージメントスコープを定義することができます。',
    'faq.q5': 'どの業界に注力していますか？',
    'faq.a5': 'コンシューマーテクノロジー、B2B SaaS、マーケットプレイスプラットフォームが中心です。C2C・B2B・B2B2Cのプロダクト環境での実績があり、特にクロスカルチャー・グローバルなエンジニアリング環境で強みを発揮します。',
    'services.tag': 'サービス内容',
    'services.title': 'アドバイザリーサービス',
    'services.sub': '各成長フェーズに応じたエンゲージメントを提供します。',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': 'フルタイム採用なしに、技術的な経営判断が必要なアーリーステージスタートアップ向けのフラクショナルCTOサービス。戦略、アーキテクチャ、チームビルディングを担います。',
    'svc.cto.format': '月次リテイナー',
    'svc.cto.duration': '3ヶ月〜',
    'svc.vpe.title': 'VPoEコンサルティング',
    'svc.vpe.desc': 'エンジニアリング組織を5人から50人以上へスケール。採用設計、評価制度、組織設計、クロスファンクショナルな連携を支援します。',
    'svc.vpe.format': 'プロジェクト型',
    'svc.vpe.duration': '応相談',
    'svc.advisory.title': 'テクニカルアドバイザリー',
    'svc.advisory.desc': '創業者やエンジニアリングリーダー向けの長期アドバイザリー。アーキテクチャレビュー、技術戦略の策定、ハンズオンメンタリング。',
    'svc.advisory.format': '月次リテイナー',
    'svc.advisory.duration': '継続型',
    'svc.devops.title': 'エンジニアリングプロセス & CI/CD',
    'svc.devops.desc': 'マイクロサービスアーキテクチャ、DevOps変革、CI/CD最適化。MercariおよびCircleCIでの実務経験をもとに支援します。',
    'svc.devops.format': 'スポット / プロジェクト',
    'svc.devops.duration': '1〜3ヶ月',
    'svc.hiring.title': 'エンジニアリング採用 & タレント',
    'svc.hiring.desc': '採用戦略の立案から実行まで、フルサイクルで支援。JD設計、面接プロセス構築、技術面接への直接参加、採用エージェントネットワークを通じてSE・EM・TL・VPoEの候補者を発掘します。',
    'svc.hiring.format': 'エンドツーエンド',
    'svc.hiring.duration': 'プロジェクト型',
    'svc.hiring.network': '採用エージェントネットワーク',
    'proof.tag': '登壇・発表',
    'proof.title': '活動実績',
    'proof.type.conf': 'カンファレンス',
    'proof.type.blog': 'ブログ',
    'proof.type.oss': 'オープンソース',
    'proof.gophercon.title': 'GopherCon',
    'proof.grpcconf.title': 'gRPC Conf',
    'proof.mercariblog.title': 'Mercari Engineering Blog',
    'proof.uberstyle.title': 'Uber Go Style Guide (KR)',
    'proof.gophercon': 'Mercariのスケールにおけるマイクロサービスアーキテクチャについて登壇。',
    'proof.grpcconf': 'プロダクション環境でのgRPC/Protobuf活用事例を発表。',
    'proof.mercariblog': 'マイクロサービス、Go、エンジニアリングカルチャーに関する技術記事を執筆・公開。',
    'proof.uberstyle': 'Uber Goスタイルガイドの韓国語訳。韓国Goコミュニティで広く参照されている。',
    'exp.tag': '経歴',
    'exp.title': '職務経歴',
    'badge.current': '現在',
    'role.liberwerk.advisory': 'アドバイザリー',
    'role.liberwerk.researcher': '独立研究員',
    'role.thecoo.cto': '最高技術責任者（CTO）',
    'role.thecoo.hoe': 'エンジニアリング本部長',
    'role.thecoo.sem': 'シニアエンジニアリングマネージャー',
    'role.thecoo.em': 'エンジニアリングマネージャー',
    'role.circleci.se': 'ソリューションズエンジニア',
    'role.mercari.sse': 'シニアソフトウェアエンジニア',
    'role.mercari.se': 'ソフトウェアエンジニア',
    'role.eventacular.se': 'ソフトウェアエンジニア（インターン）',
    'exp.mantra': 'CTOへの戦略的技術アドバイスを提供し、アーキテクチャ判断とエンジニアリングリーダーシップをサポート。',
    'exp.liberwerk': '個人事業「LiberWerk」を通じてエンジニアリングリーダーシップのアドバイザリーと独立リサーチを実施。CTO-as-a-Service、VPoEコンサルティング、スタートアップ技術顧問として活動。',
    'exp.thecoo': 'エンジニアリングマネージャーからCTOまで2.5年で昇進。CTO・エンジニアリング本部長として、プロダクトエンジニアリング・PM・SRE・コーポレートエンジニアリング・QA・新規事業部門を含む約40名を統括。',
    'exp.circleci': 'APAC企業のCI/CD設計・プロセス改善をリード。技術的なプリセールスと顧客インテグレーションを推進。',
    'exp.mercari': '8M+ DAUプラットフォームのマイクロサービスを設計・開発。PHPモノリスをGo/gRPCにマイグレーション。GopherCon・gRPC Confに登壇。エンジニアリングトレーニングプログラムを主導。',
    'exp.eventacular': 'React.js/RelayでフロントエンドをPhoenix（Elixir）とGraphQLでバックエンドを開発。',
    'exp.onecareer': '複数プロダクトドメインにまたがるエンジニアリングマネジメントをリード。B2B・B2Cプロダクト全体でエンジニアリングマネージャーおよびクロスファンクショナルなエンジニアリングチームをサポート。',
    'photo.title': 'エンジニアリングアドバイザー · 東京',
    'about.tag': 'アドバイザープロフィール',
    'about.title': '自己紹介',
    'about.p1': '日本を拠点に活動するトリリンガルのエンジニアリングリーダー。C2Cプラットフォームを9.5M+ DAUへスケールさせ、エンジニアリング組織を4〜5倍に成長させ、CTOとして約50名のエンジニアを率いた実績を持つ。B2B・C2C・B2B2Cの複数プロダクト環境での経験を有する。',
    'about.p2': 'LiberWerkを通じて、その経験をアドバイザリーエンゲージメントに活かし、エンジニアリング文化の近代化、組織スケーリング、高速でリライアブルな開発組織の構築を支援しています。',
    'about.p3': 'アプローチは直接的かつ実践的。実際にやってきたからこそのパターン認識を持ち込みます。汎用的なコンサルのプレイブックではなく。',
    'pillar.leadership': 'リーダーシップ & 組織スケーリング',
    'pillar.leadership.desc': '複数企業でICからCTOまでを経験。エンジニアリング組織を4〜5倍に成長させ、約50名の直接・間接マネジメント、採用・評価フレームワークをゼロから構築。',
    'pillar.architecture': 'アーキテクチャ & 信頼性',
    'pillar.architecture.desc': 'システムを1万人から50万人以上へスケール。マイクロサービス、Go/gRPC、SLO/SREプラクティス、CI/CD — 実プロダクションスケールでの設計・運用経験。',
    'pillar.culture': 'カルチャー & 国際化',
    'pillar.culture.desc': 'ハイコンテキストな日本型エンジニアリング文化からローコンテキストな国際標準へ変革。英語ファーストのドキュメント整備、モダンな開発プロセス導入、JP/KR/グローバルにまたがるチームビルディング。',
    'sidebar.education': '学歴',
    'sidebar.certificates': '資格・プログラム',
    'sidebar.languages': '言語',
    'sidebar.based': '拠点',
    'sidebar.location': '東京、日本',
    'edu.master': '工学修士',
    'edu.bachelor': '理学士（コンピュータサイエンス）',
    'edu.tokyotech.cert': 'テクノロジーマネジメント修了プログラム',
    'contact.tag': 'お問い合わせ',
    'contact.title': 'まずは話しましょう',
    'contact.sub': 'フラクショナルCTO、技術顧問、エンジニアリング戦略のサウンディングボードが必要な方は、お気軽にご連絡ください。',
    'contact.alt.label': 'メールで直接連絡したい方は',
    'contact.alt.reveal': 'メールアドレスを表示',
    'form.name': '名前',
    'form.name.placeholder': 'お名前',
    'form.company': '会社名',
    'form.company.placeholder': '会社名（任意）',
    'form.email': 'メールアドレス',
    'form.email.placeholder': 'you@example.com',
    'form.service': 'ご希望のサービス',
    'form.service.default': 'サービスを選択…',
    'form.service.other': 'その他 / まだ決まっていない',
    'form.message': 'メッセージ',
    'form.message.placeholder': '状況やご要望をお聞かせください…',
    'form.submit': '送信する',
    'form.success': 'メールアプリを起動しています…',
    'form.error': '送信に失敗しました。再度お試しいただくか、メールでご連絡ください。',
    'cf.step1.eyebrow': 'ステップ 1 / 2',
    'cf.step1.title': 'どのようなご相談ですか？',
    'cf.step1.sub': '最も近い状況を選択してください。',
    'cf.svc.cto.title': 'CTO-as-a-Service',
    'cf.svc.cto.desc': 'フルタイム採用なしに経営レベルの技術リーダーシップが必要な方へ',
    'cf.svc.vpe.title': 'VPoEコンサルティング',
    'cf.svc.vpe.desc': 'エンジニアリング組織のスケールや再編を検討している方へ',
    'cf.svc.advisory.title': '技術アドバイザリー',
    'cf.svc.advisory.desc': 'メンタリング、アーキテクチャレビュー、技術戦略の継続支援を希望の方へ',
    'cf.svc.chat.title': 'まずは話しましょう',
    'cf.svc.chat.desc': 'まだ決まっていない方・可能性を探りたい方へ',
    'cf.svc.hiring.title': 'エンジニアリング採用 & タレント',
    'cf.svc.hiring.desc': '採用設計、技術面接、採用ネットワークでSE/EM/TL/VPoEを発掘',
    'cf.back': '戻る',
    'cf.step2.eyebrow': 'ステップ 2 / 2',
    'cf.field.name': 'お名前',
    'cf.field.company': '会社名',
    'cf.field.email': 'メールアドレス',
    'cf.field.message': '状況をお聞かせください',
    'cf.cto.teamsize': '現在のチーム規模',
    'cf.cto.challenge': '最も緊急な課題',
    'cf.cto.frequency': '希望する関与頻度',
    'cf.vpe.orgsize': 'エンジニアリング組織の規模',
    'cf.vpe.focus': '主な注力領域',
    'cf.advisory.type': 'アドバイザリーの種類',
    'cf.hiring.role': '採用ポジション',
    'cf.hiring.scope': '必要なサポート範囲',
    'cf.hiring.timeline': '採用タイムライン',
    'cf.chip.hiring': '採用',
    'cf.chip.arch': 'アーキテクチャ',
    'cf.chip.process': 'プロセス / CI/CD',
    'cf.chip.strategy': '技術戦略',
    'cf.chip.weekly': '週次',
    'cf.chip.biweekly': '隔週',
    'cf.chip.monthly': '月次',
    'cf.chip.flexible': '柔軟に対応',
    'cf.chip.orgdesign': '組織設計',
    'cf.chip.hiringfw': '採用フレームワーク',
    'cf.chip.perfmgmt': 'パフォーマンス管理',
    'cf.chip.culture': 'カルチャー / バリュー',
    'cf.chip.mentorship': 'リーダーシップメンタリング',
    'cf.chip.techstrategy': '技術戦略',
    'cf.chip.other': 'その他',
    'cf.chip.swe': 'ソフトウェアエンジニア',
    'cf.chip.em': 'エンジニアリングマネージャー',
    'cf.chip.tl': 'テックリード',
    'cf.chip.vpe.cto': 'VPoE / CTO',
    'cf.chip.designonly': 'プロセス設計のみ',
    'cf.chip.designinterview': '設計+面接参加',
    'cf.chip.fullagent': 'フルエージェント（ソーシング含む）',
    'cf.chip.asap': 'できるだけ早く',
    'cf.chip.onetothree': '1〜3ヶ月',
    'cf.chip.threemo': '3ヶ月以上',
    'cf.submit': 'お問い合わせを送信',
    'cf.disclaimer': '通常3営業日以内にご返信いたします。',
    'cf.success.title': 'お問い合わせを受け付けました。',
    'cf.success.sub': '内容を確認の上、3営業日以内にご連絡いたします。',
    'cf.success.back': 'LiberWerkへ戻る',
    'footer.note': 'エンジニアリングリーダーシップ アドバイザリー',
  },
  ko: {
    'nav.services': '서비스',
    'nav.experience': '경력',
    'nav.about': '소개',
    'nav.cta': '문의하기',
    'hero.label': 'LiberWerk 어드바이저리',
    'hero.line1': '엔지니어링 리더십을,',
    'hero.line2': '새롭게 정의하다.',
    'hero.sub': '스타트업과 테크 기업이 세계 수준의 엔지니어링 조직을 만들 수 있도록 돕습니다. 어드바이저, 프랙셔널 CTO, VPoE로서.',
    'hero.availability': '2026년 3분기 프로젝트 수락 중',
    'hero.cta1': '함께 일하기',
    'hero.cta2': '서비스 보기',
    'stats.dau': '일간 활성 사용자',
    'stats.dau.ctx': '일본 최초 유니콘 C2C 플랫폼',
    'stats.slo': '서비스 가용성',
    'stats.slo.ctx': '하이퍼스케일에서의 SLO 운영',
    'stats.engineers': '엔지니어 매니지먼트',
    'stats.engineers.ctx': 'CTO 재직 시 피크, 도쿄증권거래소 상장사',
    'stats.growth': '조직 성장률',
    'stats.growth.ctx': '엔지니어링 조직 처음부터 구축',
    'stats.products.num': 'B2B · C2C · B2B2C',
    'stats.products': '프로덕트 모델',
    'stats.products.ctx': '다양한 도메인 프로덕트 리드 경험',
    'stats.career.num': 'SWE → EM → CTO',
    'stats.career': '엔지니어 출신 임원',
    'stats.career.ctx': '코드를 짜고, 팀을 만들고, 조직을 이끌었다.',
    'stats.scale': '시스템 스케일러빌리티',
    'stats.scale.ctx': '하이퍼스케일 아키텍처, SRE 주도',
    'stats.langs.num': 'EN · JP · KR',
    'stats.langs': '업무 사용 언어',
    'stats.langs.ctx': '트라이링궐 리더십',
    'svc.fit.label': '이런 분께 적합',
    'svc.cto.fit': '풀타임 CTO 없이 기술 리더십이 필요한 시드~시리즈 A 스타트업',
    'svc.vpe.fit': '엔지니어링 팀을 빠르게 확장 중인 시리즈 A~C 기업',
    'svc.advisory.fit': '믿을 수 있는 기술적 사운딩 보드가 필요한 창업자·엔지니어링 리더',
    'svc.devops.fit': '배포가 느리거나 파이프라인이 취약하거나 모놀리스 전환을 고민 중인 팀',
    'faq.title': '자주 묻는 질문',
    'faq.q1': '계약 시작까지 얼마나 걸리나요?',
    'faq.a1': '첫 미팅 이후 보통 2~4주 이내에 시작할 수 있습니다. 동시에 1~2개의 프로젝트를 진행하므로, 일정이 있으시면 미리 연락 주시는 것을 권장합니다.',
    'faq.q2': '일본 외 기업과도 일할 수 있나요?',
    'faq.a2': '네. 아시아태평양 지역 및 해외 기업과 원격으로 협업합니다. 영어, 일본어, 한국어로 대응 가능합니다.',
    'faq.q3': '리테이너 계약에서 일반적인 한 주는 어떻게 진행되나요?',
    'faq.a3': '필요에 따라 다릅니다. 일반적으로 주간 리더십 싱크, 아키텍처 리뷰 세션, PRD/RFC 비동기 리뷰, Slack/이메일을 통한 임시 질의응답 등으로 구성됩니다. 시작 시 진행 방식을 합의합니다.',
    'faq.q4': '커밋하기 전에 단발 세션으로 시작할 수 있나요?',
    'faq.a4': '네. 범위를 한정한 탐색 세션을 제공하며, 리테이너 계약 전에 적합성을 확인하고 구체적인 참여 범위를 정의할 수 있습니다.',
    'faq.q5': '어떤 산업에 집중하시나요?',
    'faq.a5': '컨슈머 테크, B2B SaaS, 마켓플레이스 플랫폼이 중심입니다. C2C·B2B·B2B2C 프로덕트 환경의 실전 경험이 있으며, 크로스컬처·글로벌 엔지니어링 환경에서 특히 강점을 발휘합니다.',
    'services.tag': '서비스',
    'services.title': '어드바이저리 서비스',
    'services.sub': '엔지니어링 성장의 모든 단계에 맞춤화된 서비스를 제공합니다.',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': '풀타임 채용 없이 기술 경영 판단이 필요한 초기 스타트업을 위한 프랙셔널 CTO 서비스. 전략, 아키텍처, 팀 빌딩을 담당합니다.',
    'svc.cto.format': '월 단위 리테이너',
    'svc.cto.duration': '3개월 이상',
    'svc.vpe.title': 'VP of Engineering 컨설팅',
    'svc.vpe.desc': '5명에서 50명 이상으로 엔지니어링 조직 스케일링. 채용 프레임워크, 성과 관리, 조직 설계, 크로스 펑셔널 협업을 지원합니다.',
    'svc.vpe.format': '프로젝트 기반',
    'svc.vpe.duration': '협의 가능',
    'svc.advisory.title': '기술 어드바이저리',
    'svc.advisory.desc': '창업자와 엔지니어링 리더를 위한 장기 어드바이저리. 아키텍처 리뷰, 기술 전략 수립, 핸즈온 멘토링.',
    'svc.advisory.format': '월 단위 리테이너',
    'svc.advisory.duration': '지속형',
    'svc.devops.title': '엔지니어링 프로세스 & CI/CD',
    'svc.devops.desc': '마이크로서비스 아키텍처, DevOps 전환, CI/CD 최적화. Mercari와 CircleCI의 실무 경험을 바탕으로.',
    'svc.devops.format': '스팟 / 프로젝트',
    'svc.devops.duration': '1–3개월',
    'svc.hiring.title': '엔지니어링 채용 & 인재 발굴',
    'svc.hiring.desc': '채용 전략 수립부터 실행까지 풀사이클 지원. JD 설계, 면접 프로세스 구축, 기술 면접 직접 참여, 채용 에이전트 네트워크를 통한 SE·EM·TL·VPoE 실제 후보자 소싱까지.',
    'svc.hiring.format': '엔드투엔드',
    'svc.hiring.duration': '프로젝트 기반',
    'svc.hiring.network': '채용 에이전트 연계',
    'proof.tag': '발표 및 기고',
    'proof.title': '활동 이력',
    'proof.type.conf': '컨퍼런스',
    'proof.type.blog': '블로그',
    'proof.type.oss': '오픈소스',
    'proof.gophercon.title': 'GopherCon',
    'proof.grpcconf.title': 'gRPC Conf',
    'proof.mercariblog.title': 'Mercari Engineering Blog',
    'proof.uberstyle.title': 'Uber Go Style Guide (KR)',
    'proof.gophercon': 'Mercari 규모에서의 Go 마이크로서비스 아키텍처 발표.',
    'proof.grpcconf': '프로덕션 마이크로서비스에서의 gRPC/Protobuf 도입 사례 발표.',
    'proof.mercariblog': '마이크로서비스, Go, 엔지니어링 문화에 관한 기술 아티클 게재.',
    'proof.uberstyle': 'Uber Go 스타일 가이드 한국어 번역 — 한국 Go 커뮤니티에서 널리 참조됨.',
    'exp.tag': '배경',
    'exp.title': '경력',
    'badge.current': '현재',
    'role.liberwerk.advisory': '어드바이저리',
    'role.liberwerk.researcher': '독립 연구원',
    'role.thecoo.cto': '최고기술책임자 (CTO)',
    'role.thecoo.hoe': '엔지니어링 본부장',
    'role.thecoo.sem': '시니어 엔지니어링 매니저',
    'role.thecoo.em': '엔지니어링 매니저',
    'role.circleci.se': '솔루션즈 엔지니어',
    'role.mercari.sse': '시니어 소프트웨어 엔지니어',
    'role.mercari.se': '소프트웨어 엔지니어',
    'role.eventacular.se': '소프트웨어 엔지니어 (인턴)',
    'exp.mantra': 'CTO에게 전략적 기술 어드바이스를 제공하며 아키텍처 결정과 엔지니어링 리더십을 지원.',
    'exp.liberwerk': '개인사업체 LiberWerk를 통한 엔지니어링 리더십 어드바이저리 및 독립 리서치. CTO-as-a-Service, VPoE 컨설팅, 스타트업 기술 고문으로 활동.',
    'exp.thecoo': '엔지니어링 매니저에서 CTO까지 2.5년에 걸쳐 승진. CTO 및 엔지니어링 본부장으로서 프로덕트 엔지니어링·PM·SRE·코퍼레이트 엔지니어링·QA·신규사업 부문을 포함한 약 40명 조직 총괄.',
    'exp.circleci': 'APAC 기업들의 CI/CD 설계 및 프로세스 개선 주도. 기술 프리세일즈 및 고객 인테그레이션 추진.',
    'exp.mercari': '8M+ DAU 플랫폼 마이크로서비스 설계·개발. PHP 모놀리스를 Go/gRPC로 마이그레이션. GopherCon, gRPC Conf 발표. 사내 엔지니어링 트레이닝 프로그램 주도.',
    'exp.eventacular': 'React.js/Relay로 프론트엔드, Phoenix(Elixir)와 GraphQL로 백엔드를 개발.',
    'exp.onecareer': '여러 프로덕트 도메인에 걸친 엔지니어링 매니지먼트를 주도. B2B 및 B2C 프로덕트 전반에서 엔지니어링 매니저와 크로스펑셔널 엔지니어링 팀을 지원.',
    'photo.title': '엔지니어링 어드바이저 · 도쿄',
    'about.tag': '어드바이저 프로필',
    'about.title': '자기소개',
    'about.p1': '일본 기반의 3개국어 구사 엔지니어링 리더. C2C 플랫폼을 9.5M+ DAU까지 스케일링하고, 엔지니어링 조직을 4~5배 성장시키며, CTO로서 약 50명의 엔지니어를 리드한 경험 보유. B2B, C2C, B2B2C 다양한 프로덕트 환경에서의 실전 경험.',
    'about.p2': 'LiberWerk를 통해 그 경험을 어드바이저리 서비스로 전환 — 팀 스케일링, 엔지니어링 문화 현대화, 속도와 신뢰성을 갖춘 조직 구축을 지원합니다.',
    'about.p3': '접근 방식은 직접적이고 실용적입니다. 실제로 해본 사람만이 가질 수 있는 패턴 인식을 가져옵니다. 일반적인 컨설팅 플레이북이 아닌.',
    'pillar.leadership': '리더십 & 조직 스케일링',
    'pillar.leadership.desc': '여러 회사에서 IC부터 CTO까지 경험. 엔지니어링 조직 4~5배 성장, 약 50명 직·간접 매니지먼트, 채용 및 성과 프레임워크 구축.',
    'pillar.architecture': '아키텍처 & 신뢰성',
    'pillar.architecture.desc': '시스템을 1만명에서 50만명 이상으로 스케일. 마이크로서비스, Go/gRPC, SLO/SRE, CI/CD — 실제 프로덕션 규모에서 설계·운영.',
    'pillar.culture': '컬처 & 국제화',
    'pillar.culture.desc': 'High Context 일본형 엔지니어링 문화를 Low Context 국제 표준으로 전환. 영어 우선 문서화, 모던 개발 프로세스 도입, JP/KR/글로벌 크로스컬처 팀 빌딩.',
    'sidebar.education': '학력',
    'sidebar.certificates': '자격증 및 프로그램',
    'sidebar.languages': '언어',
    'sidebar.based': '거점',
    'sidebar.location': '일본 도쿄',
    'edu.master': '공학 석사',
    'edu.bachelor': '이학사 (컴퓨터공학)',
    'edu.tokyotech.cert': '기술경영 수료 프로그램',
    'contact.tag': '연락하기',
    'contact.title': '함께 시작해요',
    'contact.sub': '프랙셔널 CTO, 기술 고문, 또는 엔지니어링 전략에 대한 사운딩 보드가 필요하시다면 편하게 연락 주세요.',
    'contact.alt.label': '이메일로 직접 연락하고 싶으시다면',
    'contact.alt.reveal': '이메일 주소 보기',
    'form.name': '이름',
    'form.name.placeholder': '이름을 입력해 주세요',
    'form.company': '회사명',
    'form.company.placeholder': '회사명 (선택)',
    'form.email': '이메일',
    'form.email.placeholder': 'you@example.com',
    'form.service': '관심 서비스',
    'form.service.default': '서비스를 선택해 주세요…',
    'form.service.other': '기타 / 아직 미정',
    'form.message': '메시지',
    'form.message.placeholder': '현재 상황과 필요한 것을 알려주세요…',
    'form.submit': '메시지 보내기',
    'form.success': '이메일 앱을 열고 있습니다…',
    'form.error': '전송에 실패했습니다. 다시 시도하거나 이메일로 직접 연락해 주세요.',
    'cf.step1.eyebrow': '1단계 / 2',
    'cf.step1.title': '어떤 도움이 필요하신가요?',
    'cf.step1.sub': '현재 상황에 가장 가까운 항목을 선택해 주세요.',
    'cf.svc.cto.title': 'CTO-as-a-Service',
    'cf.svc.cto.desc': '정규직 채용 없이 경영진 수준의 기술 리더십이 필요하신 분께',
    'cf.svc.vpe.title': 'VPoE 컨설팅',
    'cf.svc.vpe.desc': '엔지니어링 조직 확장 또는 재편을 검토 중이신 분께',
    'cf.svc.advisory.title': '기술 어드바이저리',
    'cf.svc.advisory.desc': '지속적인 멘토링, 아키텍처 리뷰, 기술 전략 지원을 원하시는 분께',
    'cf.svc.chat.title': '간단한 대화로 시작',
    'cf.svc.chat.desc': '아직 결정하지 못하셨거나 가능성을 탐색하고 싶은 분께',
    'cf.svc.hiring.title': '엔지니어링 채용 & 인재 발굴',
    'cf.svc.hiring.desc': '채용 프로세스 설계, 기술 면접, 채용 에이전트 네트워크로 SE/EM/TL/VPoE 소싱',
    'cf.back': '뒤로',
    'cf.step2.eyebrow': '2단계 / 2',
    'cf.field.name': '이름',
    'cf.field.company': '회사명',
    'cf.field.email': '이메일 주소',
    'cf.field.message': '상황을 알려주세요',
    'cf.cto.teamsize': '현재 팀 규모',
    'cf.cto.challenge': '가장 시급한 과제',
    'cf.cto.frequency': '선호하는 참여 빈도',
    'cf.vpe.orgsize': '엔지니어링 조직 규모',
    'cf.vpe.focus': '주요 집중 영역',
    'cf.advisory.type': '어드바이저리 유형',
    'cf.hiring.role': '채용 포지션',
    'cf.hiring.scope': '필요한 지원 범위',
    'cf.hiring.timeline': '채용 타임라인',
    'cf.chip.hiring': '채용',
    'cf.chip.arch': '아키텍처',
    'cf.chip.process': '프로세스 / CI/CD',
    'cf.chip.strategy': '기술 전략',
    'cf.chip.weekly': '주간',
    'cf.chip.biweekly': '격주',
    'cf.chip.monthly': '월간',
    'cf.chip.flexible': '유연하게',
    'cf.chip.orgdesign': '조직 설계',
    'cf.chip.hiringfw': '채용 프레임워크',
    'cf.chip.perfmgmt': '성과 관리',
    'cf.chip.culture': '컬처 / 밸류',
    'cf.chip.mentorship': '리더십 멘토링',
    'cf.chip.techstrategy': '기술 전략',
    'cf.chip.other': '기타',
    'cf.chip.swe': '소프트웨어 엔지니어',
    'cf.chip.em': '엔지니어링 매니저',
    'cf.chip.tl': '테크 리드',
    'cf.chip.vpe.cto': 'VPoE / CTO',
    'cf.chip.designonly': '프로세스 설계만',
    'cf.chip.designinterview': '설계 + 면접 참여',
    'cf.chip.fullagent': '풀 에이전트 (소싱 포함)',
    'cf.chip.asap': '최대한 빨리',
    'cf.chip.onetothree': '1~3개월',
    'cf.chip.threemo': '3개월 이상',
    'cf.submit': '문의 보내기',
    'cf.disclaimer': '보통 3 영업일 이내에 답변드립니다.',
    'cf.success.title': '문의가 접수되었습니다.',
    'cf.success.sub': '내용을 검토 후 3 영업일 이내에 연락드리겠습니다.',
    'cf.success.back': 'LiberWerk로 돌아가기',
    'footer.note': '엔지니어링 리더십 어드바이저리',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = { ko: 'ko', ja: 'ja', en: 'en' }[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── i18n placeholder support ────────────────────────────── */
function applyPlaceholders(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  // select default option
  const sel = document.getElementById('cf-service');
  if (sel && t['form.service.default']) sel.options[0].text = t['form.service.default'];
}

/* ── Email obfuscation ────────────────────────────────────── */
function initEmailReveal() {
  const btn = document.getElementById('reveal-email');
  const revealed = document.getElementById('revealed-email');
  if (!btn || !revealed) return;

  // Char codes — not a readable string in source
  const addr = [109,97,114,107,46,106,117,110,46,104,97,104,110,64,103,109,97,105,108,46,99,111,109].map(c => String.fromCharCode(c)).join('');

  btn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'mailto:' + addr;
    link.textContent = addr;
    revealed.innerHTML = '';
    revealed.appendChild(link);
    revealed.hidden = false;
    btn.hidden = true;
  });
}

/* ── Contact form → mailto ────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit');
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    const data = new FormData(form);
    const name    = (data.get('name') || '').trim();
    const company = (data.get('company') || '').trim();
    const email   = (data.get('email') || '').trim();
    const service = (data.get('service') || '').trim();
    const message = (data.get('message') || '').trim();

    const subject = encodeURIComponent(
      `[LiberWerk Enquiry]${service ? ' ' + service : ''}${name ? ' — ' + name : ''}`
    );

    let body = '';
    if (name)    body += `Name: ${name}\n`;
    if (company) body += `Company: ${company}\n`;
    if (email)   body += `Reply-to: ${email}\n`;
    if (service) body += `Service: ${service}\n`;
    if (message) body += `\nMessage:\n${message}\n`;

    const addr = [109,97,114,107,46,106,117,110,46,104,97,104,110,64,103,109,97,105,108,46,99,111,109]
      .map(c => String.fromCharCode(c)).join('');

    window.location.href = `mailto:${addr}?subject=${subject}&body=${encodeURIComponent(body)}`;

    statusEl.textContent = t['form.success'] || 'Opening your email app…';
    statusEl.className = 'form-status success';
    form.reset();
  });
}

/* ── Count-up animation ───────────────────────────────────── */
function initCountUp() {
  const els = document.querySelectorAll('.count-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const el     = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.3 });

  els.forEach(el => observer.observe(el));
}

/* ── Scroll fade-in ───────────────────────────────────────── */
function initObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── Sticky CTA ───────────────────────────────────────────── */
function initStickyCta() {
  const cta   = document.getElementById('sticky-cta');
  const close = document.getElementById('sticky-cta-close');
  if (!cta) return;

  const dismissed = sessionStorage.getItem('sticky-cta-dismissed');
  if (dismissed) return;

  let shown = false;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting && !shown) {
      shown = true;
      cta.classList.add('visible');
      cta.removeAttribute('aria-hidden');
    } else if (entry.isIntersecting) {
      cta.classList.remove('visible');
    }
  }, { threshold: 0 });

  const hero = document.querySelector('.hero');
  if (hero) observer.observe(hero);

  close?.addEventListener('click', () => {
    cta.classList.remove('visible');
    sessionStorage.setItem('sticky-cta-dismissed', '1');
  });
}

/* ── Dark / Light mode ────────────────────────────────────── */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefersDark;

  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}

/* ── Lang URL param ───────────────────────────────────────── */
function initLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang && translations[lang]) return lang;
  return 'en';
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = initLangFromUrl();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      applyPlaceholders(btn.dataset.lang);
    });
  });
  applyLang(initialLang);
  applyPlaceholders(initialLang);
  initEmailReveal();
  initContactForm();
  initObserver();
  initCountUp();
  initStickyCta();
  initThemeToggle();
});
