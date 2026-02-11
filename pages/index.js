import React, { useState, useEffect } from 'react';
import { 
  Target, Users, Zap, CheckCircle, Lock, QrCode, Brain, 
  DollarSign, Clock, Star, Building, Code, GitBranch, 
  Coffee, BarChart, Rocket, PlayCircle, Circle, TrendingUp,
  Calendar, Briefcase
} from 'lucide-react';

const BOLDIGNMasterplan = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedPhase, setExpandedPhase] = useState(null);
  
  // Dual Track Roadmap states
  const [completedTasks, setCompletedTasks] = useState({});
  const [roadmapWeek, setRoadmapWeek] = useState(1);

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem('boldign-roadmap-progress');
    if (saved) {
      setCompletedTasks(JSON.parse(saved));
    }
  }, []);

  const toggleTask = (taskId) => {
    const newCompleted = {
      ...completedTasks,
      [taskId]: !completedTasks[taskId]
    };
    setCompletedTasks(newCompleted);
    localStorage.setItem('boldign-roadmap-progress', JSON.stringify(newCompleted));
  };

  // Tab definitions
  const tabs = [
    { id: 'overview', label: '전체 개요', icon: Target },
    { id: 'lounge', label: 'Lounge 구조', icon: Coffee },
    { id: 'aiSystem', label: 'AI 퀘스트', icon: Brain },
    { id: 'ticket', label: '입장권 시스템', icon: Lock },
    { id: 'systems', label: 'Systems (B2B)', icon: Building },
    { id: 'roadmap', label: '로드맵', icon: GitBranch },
    { id: 'financials', label: '재무 모델', icon: DollarSign }
  ];

  // Roadmap Data
  const roadmapData = {
    week1: [
      {
        day: 1,
        title: "인프라 + 포트폴리오",
        hours: 12,
        tracks: {
          lounge: {
            title: "Lounge 인프라 (오전 6hr)",
            tasks: [
              { id: '1-l-1', text: "Cloudflare → Vercel 도메인 연결" },
              { id: '1-l-2', text: "Supabase 프로젝트 생성" },
              { id: '1-l-3', text: "Next.js 프로젝트 (TypeScript + Tailwind)" },
              { id: '1-l-4', text: "Vercel 배포 & boldign.com 연결" }
            ]
          },
          systems: {
            title: "TokéToké 포트폴리오화 (오후 6hr)",
            tasks: [
              { id: '1-s-1', text: "TokéToké 시스템 정리 (자동화 부분)" },
              { id: '1-s-2', text: "스크린샷 촬영 (대시보드, 핵심 기능)" },
              { id: '1-s-3', text: "Case Study: Challenge → Solution → Result" },
              { id: '1-s-4', text: '숫자로 증명: "30분 → 5분 (83% 절감)"' }
            ]
          }
        },
        result: "✅ 웹사이트 작동 + 포트폴리오 1개"
      },
      {
        day: 2,
        title: "DB 구축 + Upwork 세팅",
        hours: 12,
        tracks: {
          lounge: {
            title: "DB 스키마 구축 (오전 6hr)",
            tasks: [
              { id: '2-l-1', text: "users, sessions, bookings, attendance 테이블" },
              { id: '2-l-2', text: "Supabase Auth 활성화" },
              { id: '2-l-3', text: "로그인/회원가입 페이지" },
              { id: '2-l-4', text: "RLS 정책 설정" }
            ]
          },
          systems: {
            title: "Upwork/Fiverr 오픈 (오후 6hr)",
            tasks: [
              { id: '2-s-1', text: 'Upwork 프로필 ($50/hr, "Korean + English")' },
              { id: '2-s-2', text: "TokéToké 포트폴리오 업로드" },
              { id: '2-s-3', text: "Fiverr Gig 2개 ($250~, $600~)" },
              { id: '2-s-4', text: "프로필 사진 (전문적 + 캐주얼)" }
            ]
          }
        },
        result: "✅ DB 완성 + 수주 채널 오픈"
      },
      {
        day: "3-4",
        title: "대시보드 + 제안서 폭격",
        hours: 16,
        tracks: {
          lounge: {
            title: "멤버 & Admin 대시보드",
            tasks: [
              { id: '3-l-1', text: "멤버 대시보드 (포인트, 예약)" },
              { id: '3-l-2', text: "Programs 페이지 & 예약 시스템" },
              { id: '3-l-3', text: "Admin 대시보드 (멤버 관리)" },
              { id: '3-l-4', text: "출석 현황 & 통계" }
            ]
          },
          systems: {
            title: "제안서 폭탄 투하",
            tasks: [
              { id: '3-s-1', text: "제안서 템플릿 3개 (간단/중형/대형)" },
              { id: '3-s-2', text: "첫 제안서 10개 제출" },
              { id: '3-s-3', text: "제안서 10개 추가 (누적 20개)" },
              { id: '3-s-4', text: "응답 대응 (2-4개 예상)" }
            ]
          }
        },
        result: "✅ 예약 가능 시스템 + 응답 시작"
      },
      {
        day: 5,
        title: "Programs 관리 + 협상",
        hours: 8,
        tracks: {
          lounge: {
            title: "Programs 관리",
            tasks: [
              { id: '5-l-1', text: "Program 생성 (English, 주식)" },
              { id: '5-l-2', text: "Session 일괄 생성 (8주 자동)" },
              { id: '5-l-3', text: "Session 관리 페이지" }
            ]
          },
          systems: {
            title: "협상 & 추가 제안",
            tasks: [
              { id: '5-s-1', text: "응답 온 제안 대응 (가격 협상)" },
              { id: '5-s-2', text: "제안서 5개 추가 (누적 25개)" },
              { id: '5-s-3', text: "Week 1 복기 (응답률 분석)" }
            ]
          }
        },
        result: "✅ 프로그램 생성 가능 + 협상 진행"
      },
      {
        day: "6-7",
        title: "입장권 시스템 (주말 집중)",
        hours: 12,
        tracks: {
          lounge: {
            title: "Quiz → Ticket 자동화",
            tasks: [
              { id: '6-l-1', text: "Quiz DB (quizzes, questions JSONB)" },
              { id: '6-l-2', text: "Quiz 생성 (Admin: 10문제)" },
              { id: '6-l-3', text: "Quiz 응시 (Member)" },
              { id: '6-l-4', text: "자동 채점 (80점 → 입장권)" },
              { id: '6-l-5', text: "입장권 발급 (Trigger)" },
              { id: '6-l-6', text: "입장권 UI" }
            ]
          },
          systems: {
            title: "Systems는 휴식 (주말)",
            tasks: [
              { id: '6-s-1', text: "응답 확인 & 간단 대응" }
            ]
          }
        },
        result: "✅ Week 1 완료! 입장권 시스템 작동"
      }
    ],
    week2: [
      {
        day: 8,
        title: "QR 시스템 + 추가 공격",
        hours: 12,
        tracks: {
          lounge: {
            title: "QR 출석 시스템",
            tasks: [
              { id: '8-l-1', text: "QR 생성 (qrcode.react)" },
              { id: '8-l-2', text: "QR 스캔 (html5-qrcode)" },
              { id: '8-l-3', text: "Check-in 로직 (포인트 적립)" },
              { id: '8-l-4', text: "Realtime 업데이트" }
            ]
          },
          systems: {
            title: "지속 공격",
            tasks: [
              { id: '8-s-1', text: "제안서 10개 (누적 35개)" },
              { id: '8-s-2', text: "협상 중인 건 푸시" }
            ]
          }
        },
        result: "✅ QR 출석 완성"
      },
      {
        day: 9,
        title: "하드웨어 주문",
        hours: 8,
        cost: "₩710,000",
        tracks: {
          lounge: {
            title: "하드웨어 구매 & 준비",
            tasks: [
              { id: '9-l-1', text: "태블릿 구매 (갤럭시탭 ₩360k)" },
              { id: '9-l-2', text: "도어락 구매 (Xiaomi ₩350k)" },
              { id: '9-l-3', text: "QR 전용 페이지 (태블릿용)" },
              { id: '9-l-4', text: "도어락 API 준비" }
            ]
          },
          systems: {
            title: "병행 작업",
            tasks: [
              { id: '9-s-1', text: "제안서 5개 추가" }
            ]
          }
        },
        result: "✅ 하드웨어 주문 (배송 2-3일)"
      },
      {
        day: "10-11",
        title: "AI 퀘스트 + 계약 집중",
        hours: 16,
        tracks: {
          lounge: {
            title: "AI 퀘스트 & 포인트",
            tasks: [
              { id: '10-l-1', text: "Circles DB" },
              { id: '10-l-2', text: "Circle 생성 UI (3분 입력)" },
              { id: '10-l-3', text: "OpenAI GPT-4 자동 생성" },
              { id: '10-l-4', text: "포인트 & 평판 시스템" }
            ]
          },
          systems: {
            title: "계약 체결 집중",
            tasks: [
              { id: '10-s-1', text: "협상 중인 건 마무리" },
              { id: '10-s-2', text: "제안서 10개 (누적 45개)" },
              { id: '10-s-3', text: "첫 계약 체결 시도" }
            ]
          }
        },
        result: "✅ AI 퀘스트 + 첫 수주 목표"
      },
      {
        day: 12,
        title: "하드웨어 설치",
        hours: 6,
        tracks: {
          lounge: {
            title: "도어락 & 태블릿 설치",
            tasks: [
              { id: '12-l-1', text: "도어락 설치 (설치 기사)" },
              { id: '12-l-2', text: "도어락 API 연동 (unlock)" },
              { id: '12-l-3', text: "태블릿 세팅 (Kiosk Mode)" }
            ]
          },
          systems: {
            title: "병행",
            tasks: [
              { id: '12-s-1', text: "응답 대응" }
            ]
          }
        },
        result: "✅ 무인 출입 완성!"
      },
      {
        day: 13,
        title: "전체 테스트",
        hours: 8,
        tracks: {
          lounge: {
            title: "E2E 테스트",
            tasks: [
              { id: '13-l-1', text: "회원가입 → 퀴즈 → QR → 출입" },
              { id: '13-l-2', text: "성능 테스트 (QR 1초)" },
              { id: '13-l-3', text: "버그 수정 (Critical/High)" }
            ]
          },
          systems: {
            title: "Systems 병행",
            tasks: [
              { id: '13-s-1', text: "계약 진행 상황 체크" }
            ]
          }
        },
        result: "✅ 모든 시스템 검증"
      },
      {
        day: 14,
        title: "🎉 Dual Track 소프트 런칭",
        hours: 4,
        tracks: {
          lounge: {
            title: "Lounge 런칭",
            tasks: [
              { id: '14-l-1', text: "TokéToké 회원 10-15명 전환" },
              { id: '14-l-2', text: "첫 프로그램 개설 (English/주식)" },
              { id: '14-l-3', text: "모니터링 & 문서화" }
            ]
          },
          systems: {
            title: "Systems 현황",
            tasks: [
              { id: '14-s-1', text: "첫 계약 완료 (목표!)" },
              { id: '14-s-2', text: "또는: 협상 진행 중 2-3건" },
              { id: '14-s-3', text: "Daon Food 프로젝트 병행" }
            ]
          }
        },
        result: "🎉 BOLDIGN 런칭!"
      }
    ]
  };

  // Calculate progress
  const calculateProgress = () => {
    const allTasks = [...roadmapData.week1, ...roadmapData.week2].flatMap(day => [
      ...(day.tracks.lounge?.tasks || []),
      ...(day.tracks.systems?.tasks || [])
    ]);
    const completed = allTasks.filter(task => completedTasks[task.id]).length;
    return {
      total: allTasks.length,
      completed,
      percentage: Math.round((completed / allTasks.length) * 100)
    };
  };

  const calculateTrackProgress = (track) => {
    const tasks = [...roadmapData.week1, ...roadmapData.week2].flatMap(day => 
      day.tracks[track]?.tasks || []
    );
    const completed = tasks.filter(task => completedTasks[task.id]).length;
    return {
      total: tasks.length,
      completed,
      percentage: Math.round((completed / tasks.length) * 100)
    };
  };

  // Render Overview
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-2">BOLDIGN: 자율 성장 시스템 구축</h2>
        <p className="text-xl text-purple-200">개인과 기업의 지속 가능한 성장을 시스템으로 자동화</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-500 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold">BOLDIGN Lounge</h3>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">B2C</span>
            </div>
          </div>
          <p className="text-lg mb-4">자율 성장의 베이스캠프</p>
          <div className="space-y-2 text-sm">
            <div><strong>수익:</strong> 멤버십 기반</div>
            <div><strong>타겟:</strong> 25-35세 직장인, 대학생</div>
          </div>
        </div>

        <div className="bg-blue-500 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold">BOLDIGN Systems</h3>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">B2B</span>
            </div>
          </div>
          <p className="text-lg mb-4">기업 자동화 솔루션</p>
          <div className="space-y-2 text-sm">
            <div><strong>수익:</strong> 프로젝트 + SaaS</div>
            <div><strong>타겟:</strong> 중소기업, 스타트업</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          🔥 킬러 차별점: 조건부 입장 시스템
        </h3>
        <p className="text-lg text-purple-200 mb-4">학습하지 않으면 입장 불가</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {['사전 학습 퀴즈 (24시간 전)', '80점 이상 → 입장권 발급', '입장권 없으면 → 문 안 열림 🔒', '개인 책임 (팀 피해 없음)', '팀 보너스 (추가 보상)'].map((step, idx) => (
            <div key={idx} className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">{idx + 1}</div>
              <div className="text-sm">{step}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <div className="inline-block bg-green-500 px-6 py-3 rounded-lg">
            <span className="text-2xl font-bold">Lock-in: 90%+</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4">🔥 경쟁사 vs BOLDIGN</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3">구분</th>
                <th className="text-left p-3">경쟁사</th>
                <th className="text-left p-3">BOLDIGN</th>
                <th className="text-left p-3">우위</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="p-3 font-semibold">비즈니스 모델</td>
                <td className="p-3 text-red-400">공간 임대</td>
                <td className="p-3 text-green-400 font-semibold">공간 + 시스템 + AI</td>
                <td className="p-3 text-purple-400">확장 가능</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="p-3 font-semibold">운영 방식</td>
                <td className="p-3 text-red-400">수동 관리</td>
                <td className="p-3 text-green-400 font-semibold">90% 자동화</td>
                <td className="p-3 text-purple-400">고정비 낮음</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="p-3 font-semibold">Lock-in</td>
                <td className="p-3 text-red-400">0-40%</td>
                <td className="p-3 text-green-400 font-semibold">90%+</td>
                <td className="p-3 text-purple-400">이탈 최소화</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="p-3 font-semibold">차별점</td>
                <td className="p-3 text-red-400">공간 위치/가격</td>
                <td className="p-3 text-green-400 font-semibold">조건부 입장 + AI</td>
                <td className="p-3 text-purple-400">모방 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Render Lounge (기존 코드 유지)
  const renderLounge = () => (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">BOLDIGN Lounge 구조</h2>
        <p className="text-purple-200 mb-6">단순 공간 임대가 아닌, 시스템 기반 성장 커뮤니티</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">Core Programs</h3>
            <p className="text-lg text-white/80 mb-4">핵심 프로그램</p>
            <div className="space-y-3 mb-4">
              <div><strong>유형:</strong> 언어 학습</div>
              <div><strong>기간:</strong> 24주 고정 커리큘럼</div>
              <div><strong>관리:</strong> 운영팀 관리</div>
              <div><strong>자동화:</strong> 50%</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-2">예시:</div>
              <ul className="space-y-1">
                <li className="text-sm">• English Journey (24주)</li>
                <li className="text-sm">• Korean Journey (24주)</li>
                <li className="text-sm">• Language Exchange (주간)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-500 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">Growth Circles</h3>
            <p className="text-lg text-white/80 mb-4">성장 서클</p>
            <div className="space-y-3 mb-4">
              <div><strong>유형:</strong> 멤버 자율 모임</div>
              <div><strong>기간:</strong> 4-12주 프로젝트</div>
              <div><strong>관리:</strong> AI 자동화</div>
              <div><strong>자동화:</strong> 90%</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-2">예시:</div>
              <ul className="space-y-1">
                <li className="text-sm">• 주식 정복 8주</li>
                <li className="text-sm">• AI 워크샵 6주</li>
                <li className="text-sm">• 디자인 스터디 4주</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-6">멤버십 구조</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-500 rounded-xl p-6">
            <h4 className="text-2xl font-bold mb-2">Basic</h4>
            <div className="text-3xl font-bold mb-4">₩50,000/월</div>
            <div className="text-sm text-white/70 mb-4">가볍게 시작</div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>월 4회 프로그램 (주 1회)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>일반 예약 (3일 전)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>프로그램 시간만 공간 이용</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-500 rounded-xl p-6 ring-4 ring-yellow-400">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
              추천!
            </div>
            <h4 className="text-2xl font-bold mb-2">Premium</h4>
            <div className="text-3xl font-bold mb-4">₩150,000/월</div>
            <div className="text-sm text-white/70 mb-4">적극 성장</div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>무제한 프로그램 참여</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>최우선 예약 (7일 전)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>라운지 상시 이용</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Premium 전용 이벤트</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-6">
          <h4 className="text-xl font-bold mb-4">수익 모델 (목표: 40명)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-slate-400">Basic (30명)</div>
              <div className="text-2xl font-bold text-green-400">₩1,500,000</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Premium (10명)</div>
              <div className="text-2xl font-bold text-purple-400">₩1,500,000</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">총 월 매출</div>
              <div className="text-3xl font-bold text-yellow-400">₩3,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render AI System (계속...)
  const renderAISystem = () => (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">AI 퀘스트 생성 시스템</h2>
        <p className="text-lg text-purple-200 mb-6">멤버는 3분 입력, AI가 완벽한 성장 프로그램 생성</p>

        <div className="space-y-4">
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3 flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">1. 멤버 간단 입력</h3>
                  <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">3분</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">담당: 멤버</div>
                <ul className="space-y-1">
                  <li className="text-sm">• 주제: "주식 초보 탈출"</li>
                  <li className="text-sm">• 기간: 8주</li>
                  <li className="text-sm">• 목표 레벨: 초보 → 기초 탈출</li>
                  <li className="text-sm">• 일정: 수요일 19:00</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3 flex-shrink-0">
                <Brain className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">2. AI 자동 생성</h3>
                  <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">10초</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">담당: AI (GPT-4)</div>
                <ul className="space-y-1">
                  <li className="text-sm text-green-400">✓ 8주 커리큘럼 (4개 마일스톤)</li>
                  <li className="text-sm text-green-400">✓ 24개 체크리스트</li>
                  <li className="text-sm text-green-400">✓ 4개 과제</li>
                  <li className="text-sm text-green-400">✓ 보상 계산 (870 pts)</li>
                  <li className="text-sm text-green-400">✓ 사전 학습 퀴즈 (매주)</li>
                  <li className="text-sm text-green-400">✓ 입장권 기준 (80점)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3 flex-shrink-0">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">3. 퀘스트 창 표시</h3>
                  <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">즉시</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">담당: 시스템</div>
                <div className="mt-3">
                  <div className="text-lg font-bold text-purple-300">주식 정복 8주 프로젝트</div>
                  <ul className="space-y-1 mt-2">
                    <li className="text-sm">• 난이도: ⭐⭐⭐</li>
                    <li className="text-sm">• 보상: +870 Points</li>
                    <li className="text-sm">• Tier: Bronze → Silver</li>
                    <li className="text-sm">• 인원: 3-8명</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3 flex-shrink-0">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">4. Accept Quest</h3>
                  <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">1초</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">담당: 멤버</div>
                <div className="text-lg font-bold text-yellow-300">멤버 클릭!</div>
                <ul className="space-y-1 mt-3">
                  <li className="text-sm">→ Circle 생성 시작</li>
                  <li className="text-sm">→ 최소 인원 대기 (3명)</li>
                  <li className="text-sm">→ 인원 충족 → 자동 생성</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3 flex-shrink-0">
                <Zap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">5. 자동 Circle 생성</h3>
                  <span className="bg-slate-600 px-3 py-1 rounded-full text-sm">10초</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">담당: 시스템 (자동)</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                  {['독립 웹 페이지', '대시보드', '마일스톤 타임라인', '체크리스트 시스템', '과제 관리', 'Circle 내 순위', '팀 채팅', 'QR 출석'].map((item, i) => (
                    <div key={i} className="bg-slate-600 px-3 py-2 rounded text-sm text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Ticket System (계속...)
  const renderTicketSystem = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900 to-purple-900 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-2">조건부 입장권 시스템</h2>
        <p className="text-xl text-purple-200 mb-2">학습하지 않으면 입장 불가 🔒</p>
        <p className="text-lg">원칙: 개인 책임 + 팀 보너스</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-6">주간 플로우</h3>
        <div className="space-y-4">
          {[
            { icon: Brain, timing: '세션 24시간 전', event: '사전 학습 퀴즈 발송', action: '10문제 퀴즈 자동 발송', auto: true },
            { icon: Users, timing: '마감 3시간 전까지', event: '멤버 퀴즈 완료', action: '80점 이상 필수 (재시도 2회)', auto: false },
            { icon: CheckCircle, timing: '즉시', event: '자동 채점 & 입장권 발급', action: '80점 이상 → ✅ 입장권', auto: true },
            { icon: QrCode, timing: '세션 1시간 전', event: 'QR 코드 발송', action: '입장권 보유자에게만 QR', auto: true },
            { icon: Lock, timing: '세션 시작', event: 'QR 스캔 & 입장', action: '입장권 검증 → 문 열림/안 열림', auto: true }
          ].map((step, idx) => (
            <div key={idx} className="bg-slate-700 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className={`rounded-lg p-3 ${step.auto ? 'bg-purple-500' : 'bg-blue-500'}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold">{step.event}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-400">{step.timing}</span>
                      {step.auto && (
                        <span className="bg-purple-500/30 px-2 py-1 rounded text-xs">자동</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{step.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">개인 기본 보상 (항상)</h3>
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-green-400">✅ 입장권 보유 시:</h4>
            <ul className="space-y-2">
              {['출석 +10 pts', '세션 정상 참여', '체크리스트 정상', '과제 정상'].map((reward, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{reward}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-red-400">❌ 입장권 없을 시:</h4>
            <ul className="space-y-2">
              {['출석 없음', '세션 참여 불가 (문 안 열림)', '해당 주 차단', '평판 -5 (개인만)'].map((penalty, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm">{penalty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">팀 추가 보상 (선택)</h3>
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-yellow-400">🎁 전원 완료 시:</h4>
            <ul className="space-y-2">
              {['팀 보너스 +20 pts (각자)', '특별 과제 언락', '다음 주 더블 XP'].map((bonus, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-400">ℹ️ 일부 미완료 시:</h4>
            <ul className="space-y-2">
              {['팀 보너스 없음 (추가 보상만)', '기본 보상은 모두 정상', '팀 피해 없음!'].map((info, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-sm">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Systems (계속...)
  const renderSystems = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-2">BOLDIGN Systems (B2B)</h2>
        <p className="text-xl text-blue-200">기업 자동화 솔루션</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, name: 'Process Automation', korean: '업무 프로세스 자동화', examples: ['Google Sheets 자동화', '데이터 수집 & 처리', '보고서 자동 생성'], pricing: '₩300,000~₩2,000,000' },
          { icon: BarChart, name: 'Dashboard Development', korean: '맞춤형 대시보드', examples: ['실시간 비즈니스 모니터링', 'KPI 시각화', '팀 협업 도구'], pricing: '₩600,000~₩3,000,000' },
          { icon: Building, name: 'SaaS Transformation', korean: 'SaaS 전환 컨설팅', examples: ['반복 업무 → SaaS화', 'MRR 모델 설계', '자동화 구조 구축'], pricing: '₩5,000,000~₩20,000,000' }
        ].map((service, idx) => (
          <div key={idx} className="bg-slate-800 rounded-xl p-6">
            <div className="bg-blue-500 rounded-lg p-3 inline-block mb-4">
              <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{service.korean}</p>
            <div className="mb-4">
              <div className="text-xs text-slate-500 mb-2">예시:</div>
              <ul className="space-y-1">
                {service.examples.map((ex, i) => (
                  <li key={i} className="text-sm">• {ex}</li>
                ))}
              </ul>
            </div>
            <div className="text-lg font-bold text-green-400">{service.pricing}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4">Upwork Sprint (2주)</h3>
        <p className="text-purple-200 mb-6">목표: 첫 수주 + 포트폴리오 확보</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { day: '1-2', focus: 'TokéToké 포트폴리오화' },
            { day: '3-5', focus: '제안서 25개 발송' },
            { day: '6-7', focus: '2차 포트폴리오 + 마케팅' },
            { day: '8-14', focus: '지속 공격 + 첫 계약' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-700 rounded-lg p-4">
              <div className="text-sm text-purple-400 mb-2">{item.day}</div>
              <div className="font-semibold">{item.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render Roadmap - DUAL TRACK VERSION!
  const renderRoadmap = () => {
    const progress = calculateProgress();
    const loungeProgress = calculateTrackProgress('lounge');
    const systemsProgress = calculateTrackProgress('systems');
    const currentWeekData = roadmapWeek === 1 ? roadmapData.week1 : roadmapData.week2;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">BOLDIGN Dual Track 2주 런칭 로드맵</h2>
              <p className="text-xl text-purple-200">Lounge (B2C) + Systems (B2B) 동시 진행</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-purple-400">{progress.percentage}%</div>
              <div className="text-sm text-purple-200">전체 진행률</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>

          {/* Track Progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Track A: Lounge (B2C)</span>
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${loungeProgress.percentage}%` }} />
                </div>
                <span className="text-xl font-bold text-blue-400">{loungeProgress.percentage}%</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {loungeProgress.completed} / {loungeProgress.total} 완료
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Track B: Systems (B2B)</span>
                <Briefcase className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${systemsProgress.percentage}%` }} />
                </div>
                <span className="text-xl font-bold text-green-400">{systemsProgress.percentage}%</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {systemsProgress.completed} / {systemsProgress.total} 완료
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">전체 완료</span>
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-purple-400">
                {progress.completed} / {progress.total}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                태스크 완료
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Mission Statement
          </h3>
          <p className="text-lg leading-relaxed">
            "나는 <span className="text-purple-300 font-bold">자율 운영 시스템(BOLDIGN Systems)</span>을 개발하고, 
            그 시스템으로 돌아가는 <span className="text-blue-300 font-bold">미래형 성장 라운지(BOLDIGN Lounge)</span>를 
            운영하는 <span className="text-pink-300 font-bold">아키텍트</span>다."
          </p>
        </div>

        {/* Week Selector */}
        <div className="flex gap-2">
          <button
            onClick={() => setRoadmapWeek(1)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              roadmapWeek === 1
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Week 1: 기반 구축
          </button>
          <button
            onClick={() => setRoadmapWeek(2)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              roadmapWeek === 2
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Week 2: 완성 & 수주
          </button>
        </div>

        {/* Days */}
        <div className="space-y-4">
          {currentWeekData.map((day, dayIdx) => (
            <div key={dayIdx} className="bg-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`${roadmapWeek === 1 ? 'bg-purple-600' : 'bg-pink-600'} px-3 py-1 rounded-lg font-bold`}>
                      Day {day.day}
                    </div>
                    <h3 className="text-xl font-bold">{day.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                    <span>⏱️ {day.hours} 시간</span>
                    {day.cost && <span>💰 {day.cost}</span>}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lounge Track */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold mb-3 text-blue-300 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {day.tracks.lounge.title}
                  </h4>
                  <div className="space-y-2">
                    {day.tracks.lounge.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex items-start gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer transition-colors"
                        onClick={() => toggleTask(task.id)}
                      >
                        {completedTasks[task.id] ? (
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${completedTasks[task.id] ? 'line-through text-slate-500' : ''}`}>
                          {task.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Systems Track */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold mb-3 text-green-300 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {day.tracks.systems.title}
                  </h4>
                  <div className="space-y-2">
                    {day.tracks.systems.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex items-start gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer transition-colors"
                        onClick={() => toggleTask(task.id)}
                      >
                        {completedTasks[task.id] ? (
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${completedTasks[task.id] ? 'line-through text-slate-500' : ''}`}>
                          {task.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-green-900/30 border border-green-500 rounded-lg p-3">
                <strong>Day {day.day} 결과:</strong> {day.result}
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8">
          <h3 className="text-3xl font-bold mb-6">🎯 2주 후 결과</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Track A: BOLDIGN Lounge
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>완전 작동하는 웹사이트 (boldign.com)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>멤버십 시스템 (Basic/Premium)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>AI 퀘스트 + 조건부 입장권</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>QR 무인 출입 시스템</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>포인트 & 평판 시스템</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>TokéToké 회원 10-15명 전환</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  <span>목표: 월 ₩3M 매출 (멤버 40명)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Track B: BOLDIGN Systems
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Upwork/Fiverr 프로필 오픈</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>TokéToké 포트폴리오 완성</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>제안서 40-50개 발송</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <span>첫 수주 1건 ($500+) 목표</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                  <span>또는 협상 진행 중 2-3건</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span>Daon Food 프로젝트 병행</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  <span>다음 달: 수주 2-3건 목표</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-slate-800 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">💰 2주 후 예상 현황</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">₩725,000</div>
                <div className="text-sm text-slate-400 mt-1">총 투자 (하드웨어)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">₩500,000+</div>
                <div className="text-sm text-slate-400 mt-1">Lounge 초기 매출</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">$500+</div>
                <div className="text-sm text-slate-400 mt-1">Systems 첫 수주</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Financials (기존 코드 유지...)
  const renderFinancials = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">재무 모델</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Phase 1 (1-3개월)</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lounge:</span>
                <span className="font-bold">₩3,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>Systems:</span>
                <span className="font-bold">₩3,000,000</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2">
                <span>총 매출:</span>
                <span className="font-bold text-yellow-400">₩6,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>비용:</span>
                <span className="font-bold text-red-400">₩2,000,000</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2">
                <span>순이익:</span>
                <span className="font-bold text-green-400">₩4,000,000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phase 2 (6-12개월)</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lounge:</span>
                <span className="font-bold">₩8,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>Systems:</span>
                <span className="font-bold">₩6,000,000</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2">
                <span>총 매출:</span>
                <span className="font-bold text-yellow-400">₩14,000,000</span>
              </div>
              <div className="flex justify-between">
                <span>비용:</span>
                <span className="font-bold text-red-400">₩4,000,000</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2">
                <span>순이익:</span>
                <span className="font-bold text-green-400">₩10,000,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-6">BOLDIGN Lounge 재무 상세</h3>
        
        <div className="bg-slate-700 rounded-lg p-4 mb-6">
          <h4 className="font-bold mb-3">월 고정비</h4>
          <div className="space-y-2 text-sm">
            {[
              { item: '공간 임대료', cost: 800000 },
              { item: '호스트 비용', cost: 600000 },
              { item: '운영비', cost: 300000 },
              { item: '마케팅', cost: 200000 },
              { item: '시스템 유지', cost: 100000 }
            ].map((cost, i) => (
              <div key={i} className="flex justify-between">
                <span>{cost.item}</span>
                <span>₩{cost.cost.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-slate-600 pt-2 flex justify-between font-bold">
              <span>총 비용</span>
              <span className="text-red-400">₩2,000,000</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
            <h4 className="font-bold mb-2">Phase 1 마진</h4>
            <div className="text-3xl font-bold text-green-400">33%</div>
            <div className="text-sm">₩1,000,000/월</div>
          </div>

          <div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
            <h4 className="font-bold mb-2">Phase 2 마진</h4>
            <div className="text-3xl font-bold text-green-400">62%</div>
            <div className="text-sm">₩5,000,000/월</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-6">BOLDIGN Systems 재무 상세</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-700 rounded-lg p-4">
            <h4 className="font-bold mb-3">Upwork 모델</h4>
            <div className="space-y-2 text-sm">
              <div><strong>모델:</strong> 프로젝트 기반</div>
              <div><strong>평균 프로젝트:</strong> ₩1,500,000</div>
              <div><strong>월 프로젝트:</strong> 2-4개</div>
              <div className="border-t border-slate-600 pt-2 font-bold text-green-400">
                월 매출: ₩3,000,000~6,000,000
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-4">
            <h4 className="font-bold mb-3">SaaS 모델 (추후)</h4>
            <div className="space-y-2 text-sm">
              <div><strong>모델:</strong> MRR</div>
              <div><strong>목표 고객:</strong> 10-20개사</div>
              <div><strong>평균 MRR:</strong> ₩300,000</div>
              <div className="border-t border-slate-600 pt-2 font-bold text-green-400">
                월 매출: ₩3,000,000~6,000,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-12 h-12 text-purple-400" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BOLDIGN 마스터플랜
              </h1>
              <p className="text-xl text-slate-300 mt-2">자율 성장 시스템 구축 로드맵</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'lounge' && renderLounge()}
          {activeTab === 'aiSystem' && renderAISystem()}
          {activeTab === 'ticket' && renderTicketSystem()}
          {activeTab === 'systems' && renderSystems()}
          {activeTab === 'roadmap' && renderRoadmap()}
          {activeTab === 'financials' && renderFinancials()}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>BOLDIGN © 2026 | 자율 성장 시스템</p>
        </div>
      </div>
    </div>
  );
};

export default BOLDIGNMasterplan;
