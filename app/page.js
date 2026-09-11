'use client'

import { useState, useEffect } from 'react'

const translations = {
  zh: {
    name: '叶文涛 · Wentao Ye',
    title: '博士候选人 | 机制设计 · 多智能体系统 · 大模型系统',
    location: '中国 · 深圳',
    education: '📚 教育背景',
    phd: '博士研究生',
    phdSchool: '香港中文大学（深圳）· 理工学院',
    phdDetail: '计算机与信息工程专业 · 2021 – 2027（预计毕业）',
    bachelor: '工学学士',
    bachelorSchool: '电子科技大学 · 英才实验学院',
    bachelorDetail: '计算机科学与技术专业 · 2017 – 2021',
    honorGraduate: '英才荣誉学院荣誉毕业生',
    honors: '🏆 荣誉与奖项',
    honorsList: [
      '2017–2020 优秀学生奖学金（3次）',
      '2018 牛津剑桥夏令营优秀团队成员',
      '2021 英才荣誉学院荣誉毕业生',
      '2024 香港中文大学（深圳）驻深北莫书院最受学生欢迎奖'
    ],
    publications: '📄 学术论文',
    ml: '🤖 机器学习',
    crowdsourcing: '🚗 众包机制设计',
    llm: '🧠 大模型机制设计',
    energy: '⚡ 大模型赋能能源',
    other: '📌 其他',
    otherEmpty: '暂无相关论文',
    patents: '💡 专利',
    patentsList: [
      '2024 众包建图方法、云平台及计算机可读存储介质（CN118328992A，已申请）',
      '2023 一种众包车辆招募方法（CN117078217A，已申请）',
      '2022 一种微博网络重要用户识别方法（CN113159976B，已授权）'
    ],
    service: '🎯 学术服务',
    serviceReviewer: '✦ 审稿人：IEEE Transactions on Mobile Computing (TMC)；IEEE Transactions on Affective Computing (TAC)；AAAI Conference on Artificial Intelligence (AAAI)',
    teaching: '📖 教学经历',
    ta: '助教 · 2021–2026',
    taSchool: '香港中文大学（深圳）',
    taCourses: '课程：概率论；线性代数；网络：技术、经济与社会；机器智能与应用；嵌入式系统导论；微处理器与计算机系统；微处理器系统设计实验',
    research: '🔬 研究兴趣',
    research1: '✦ 机制设计 · 多智能体系统',
    research2: '✦ 大模型系统 · 网络优化',
    research3: '✦ 面向网络化与能源系统的 AI',
    footer: '© 2026 叶文涛 · 本页面基于真实学术简历 | 更新于 2026年9月'
  },
  en: {
    name: 'Wentao Ye',
    title: 'Ph.D. Candidate | Mechanism Design · Multi-Agent Systems · LLM Systems',
    location: 'Shenzhen, China',
    education: '📚 Education',
    phd: 'Ph.D. Candidate',
    phdSchool: 'The Chinese University of Hong Kong, Shenzhen · School of Science and Engineering',
    phdDetail: 'Computer and Information Engineering · 2021 – 2027 (Expected)',
    bachelor: 'Bachelor of Engineering',
    bachelorSchool: 'University of Electronic Science and Technology of China · Yingcai Honor College',
    bachelorDetail: 'Computer Science and Technology · 2017 – 2021',
    honorGraduate: 'Honorary Graduate of Yingcai Honor College',
    honors: '🏆 Honors & Awards',
    honorsList: [
      '2017–2020 Excellent Student Scholarship (3 times)',
      '2018 Outstanding Team Member, Oxford & Cambridge Summer Camp',
      '2021 Yingcai Honor College Honorary Graduate',
      '2024 CUHKSZ-Shenzhen MSU-BIT University Most Popular Resident Tutor Award'
    ],
    publications: '📄 Publications',
    ml: '🤖 Machine Learning',
    crowdsourcing: '🚗 Mechanism Design for Crowdsourcing',
    llm: '🧠 Mechanism for LLM',
    energy: '⚡ LLM4Energy',
    other: '📌 Other',
    otherEmpty: 'No papers in this category yet',
    patents: '💡 Patents',
    patentsList: [
      '2024 Crowdsourced Mapping Method, Cloud Platform, and Computer-Readable Storage Medium (CN118328992A, filed)',
      '2023 A Recruiting Method for Crowdsourced Vehicles (CN117078217A, filed)',
      '2022 A Method for Identifying Important Users in Weibo Networks (CN113159976B, granted)'
    ],
    service: '🎯 Professional Service',
    serviceReviewer: '✦ Reviewer: IEEE Transactions on Mobile Computing (TMC); IEEE Transactions on Affective Computing (TAC); AAAI Conference on Artificial Intelligence (AAAI)',
    teaching: '📖 Teaching Experience',
    ta: 'Teaching Assistant · 2021–2026',
    taSchool: 'The Chinese University of Hong Kong, Shenzhen',
    taCourses: 'Courses: Probability Theory; Linear Algebra; Networks: Technology, Economics and Society; Machine Intelligence and Applications; Introduction to Embedded Systems; Microprocessors and Computer Systems; Microprocessor System Design Laboratory',
    research: '🔬 Research Interests',
    research1: '✦ Mechanism Design · Multi-Agent Systems',
    research2: '✦ LLM Systems · Network Optimization',
    research3: '✦ AI for Networked and Energy Systems',
    footer: '© 2026 Wentao Ye · Based on real academic CV | Updated September 2026'
  }
}

export default function Home() {
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    const saved = localStorage.getItem('preferred_lang')
    if (saved) setLang(saved)
  }, [])

  const changeLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferred_lang', newLang)
  }

  const t = translations[lang]

  return (
    <div className="container">
      <div className="lang-bar">
        <button 
          className={`lang-btn ${lang === 'zh' ? 'active' : ''}`} 
          onClick={() => changeLang('zh')}
        >
          中文
        </button>
        <button 
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
          onClick={() => changeLang('en')}
        >
          English
        </button>
      </div>

      <div className="profile">
        <img className="photo" src="/photo.jpg" alt="叶文涛照片" onError={(e) => e.target.style.display = 'none'} />
        <div className="info">
          <h1>{lang === 'zh' ? '叶文涛 · Wentao Ye' : 'Wentao Ye'}</h1>
          <div className="title">{t.title}</div>
          <div className="contact">
            <span>📧 wentaoye2021@outlook.com</span>
            <span>📍 {t.location}</span>
          </div>
        </div>
      </div>

      <div className="content">
        <section>
          <h2>{t.education}</h2>
          <div className="card" style={{ padding: '1rem 1.5rem' }}>
            <div className="education-item">
              <div className="education-degree">{t.phd}</div>
              <div className="education-school">{t.phdSchool}</div>
              <div className="education-detail">{t.phdDetail}</div>
            </div>
            <div className="education-item">
              <div className="education-degree">{t.bachelor}</div>
              <div className="education-school">{t.bachelorSchool}</div>
              <div className="education-detail">{t.bachelorDetail}</div>
              <div className="education-detail">{t.honorGraduate}</div>
            </div>
          </div>
        </section>

        <section>
          <h2>{t.honors}</h2>
          <div className="card">
            <ul className="honor-list">
              {t.honorsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>{t.publications}</h2>

          <div className="pub-category">
            <h3>{t.ml}</h3>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Liu, Z., & Pan, L.</div>
              <div className="pub-title">Who are the celebrities? Identifying vital users on Sina Weibo microblogging network.</div>
              <div className="pub-venue">Knowledge-Based Systems, 231, 107438 (2021). <span className="pub-status badge-published">Published</span></div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Sun, H., Wang, J., & Ye, W.</div>
              <div className="pub-title">A data augmentation-based evaluation system for regional direct economic losses of storm surge disasters.</div>
              <div className="pub-venue">International Journal of Environmental Research and Public Health, 18(6), 2918 (2021). <span className="pub-status badge-published">Published</span></div>
            </div>
          </div>

          <div className="pub-category">
            <h3>{t.crowdsourcing}</h3>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Luo, Y., Liu, B., & Huang, J.</div>
              <div className="pub-title">Recruiting Heterogeneous Crowdsource Vehicles for Updating a High-Definition Map.</div>
              <div className="pub-venue">WiOpt 2023, pp. 1-8, IEEE. <span className="pub-status badge-published">Published</span></div>
              <div className="pub-links">
                <a href="https://arxiv.org/abs/2603.27109" target="_blank" rel="noopener noreferrer">[PDF]</a>
              </div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Liu, B., Luo, Y., & Huang, J.</div>
              <div className="pub-title">Dual Role AoI-based Incentive Mechanism for HD Map Crowdsourcing.</div>
              <div className="pub-venue">AAMAS 2024, pp. 2570-2572. <span className="pub-status badge-published">Published (Extended Abstract)</span></div>
              <div className="pub-links">
                <a href="https://arxiv.org/abs/2405.00353" target="_blank" rel="noopener noreferrer">[PDF]</a>
              </div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Liu, B., Luo, Y., Huang, J.</div>
              <div className="pub-title">Efficient and Cost-effective Vehicle Recruitment for HD Map Crowdsourcing.</div>
              <div className="pub-venue">IEEE Transactions on Mobile Computing, 24(6), 7505-7518 (2025). <span className="pub-status badge-published">Published</span></div>
              <div className="pub-links">
                <a href="https://arxiv.org/abs/2603.27102" target="_blank" rel="noopener noreferrer">[PDF]</a>
              </div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Luo, Y., Liu, B., Huang, J.</div>
              <div className="pub-title">Dual-Role Incentive Mechanism for HD Map Crowdsourcing.</div>
              <div className="pub-venue">IEEE Transactions on Mobile Computing <span className="pub-status badge-published">Accepted (to appear)</span></div>
            </div>
          </div>

          <div className="pub-category">
            <h3>{t.llm}</h3>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Song, Y., Luo, Y., Liu, B., Huang, J.</div>
              <div className="pub-title">Mechanism Design for Agent-driven Multi-domain Recommender Systems.</div>
              <div className="pub-venue">AAAI 2027 <span className="pub-status badge-under-review">Under Review</span></div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., Song, Y., Luo, Y., Liu, B., Huang, J.</div>
              <div className="pub-title">Truthful Mechanism Design for Multi-LLM Multi-domain Recommender System.</div>
              <div className="pub-venue">IEEE Transactions on Networking <span className="pub-status badge-working">Working paper</span></div>
            </div>
            <div className="pub-item">
              <div className="pub-authors">Ye, W., & Huang, J.</div>
              <div className="pub-title">AdaWait: Adaptive Stopping for Quality-Latency-Optimized Asynchronous Token-Level LLM Ensembling.</div>
              <div className="pub-venue">AAAI 2027 <span className="pub-status badge-under-review">Under Review</span></div>
            </div>
          </div>

          <div className="pub-category">
            <h3>{t.energy}</h3>
            <div className="pub-item">
              <div className="pub-authors">Cai X., Ye, W., Meng Z., Cheng J., Dong K., Huang, J., Shen Z.</div>
              <div className="pub-title">LICA: A Multi-Agent Framework for Household Electricity Scheduling under Real-Time Pricing.</div>
              <div className="pub-venue">Applied Energy (2026). <span className="pub-status badge-published">Published</span></div>
              <div className="pub-links">
                <a href="https://github.com/WentaoYe-com/AI4Energy_Intelligent_Electricity_Advisor" target="_blank" rel="noopener noreferrer">[GitHub]</a>
              </div>
            </div>
          </div>

          <div className="pub-category">
            <h3>{t.other}</h3>
            <div style={{ color: '#5a6e85', fontStyle: 'italic', padding: '0.5rem 0' }}>
              {t.otherEmpty}
            </div>
          </div>
        </section>

        <section>
          <h2>{t.patents}</h2>
          <div className="card">
            <ul className="honor-list">
              {t.patentsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>{t.service}</h2>
          <div className="card" style={{ background: '#f9fbfd' }}>
            <p>{t.serviceReviewer}</p>
          </div>
        </section>

        <section>
          <h2>{t.teaching}</h2>
          <div className="card">
            <div className="education-item">
              <div className="education-degree">{t.ta}</div>
              <div className="education-school">{t.taSchool}</div>
              <div className="education-detail">{t.taCourses}</div>
            </div>
          </div>
        </section>

        <section>
          <h2>{t.research}</h2>
          <div className="card" style={{ background: '#f9fbfd' }}>
            <p>{t.research1}</p>
            <p>{t.research2}</p>
            <p>{t.research3}</p>
          </div>
        </section>
      </div>

      <footer>{t.footer}</footer>
    </div>
  )
}
