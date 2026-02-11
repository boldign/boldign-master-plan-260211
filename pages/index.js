import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, DollarSign, Target, Calendar, TrendingUp, FileText, Send, Star } from 'lucide-react';

const UpworkSprintDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({});

  const toggleTask = (dayId, taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [`${dayId}-${taskId}`]: !prev[`${dayId}-${taskId}`]
    }));
  };

  const week1Plan = [
    {
      id: 'day1',
      day: 'Day 1',
      date: '시작일',
      focus: 'TokéToké 포트폴리오화',
      time: '8시간',
      color: 'bg-blue-500',
      tasks: [
        { id: 1, title: 'TokéToké 시스템 정리', time: '3hr', desc: '현재 자동화된 부분 찾기, Before/After 만들기' },
        { id: 2, title: '스크린샷 촬영', time: '2hr', desc: '대시보드, 핵심 기능 화면 5-6개' },
        { id: 3, title: 'Case Study 문서 작성', time: '3hr', desc: '결과 수치화, 실제 운영 중 강조' }
      ],
      deliverable: '✅ 포트폴리오 1개 완성',
      tips: [
        '숫자로 증명: "30분 → 5분 (83% 절감)"',
        '스크린샷은 깔끔하게 (불필요한 정보 가리기)',
        'Case Study 템플릿: Challenge → Solution → Result'
      ]
    },
    {
      id: 'day2',
      day: 'Day 2',
      date: '+1일',
      focus: 'Upwork/Fiverr 세팅',
      time: '4시간',
      color: 'bg-purple-500',
      tasks: [
        { id: 1, title: 'Upwork 프로필 작성', time: '2hr', desc: 'Title, Overview, Portfolio 업로드, $50/hr 설정' },
        { id: 2, title: 'Fiverr Gig 2개 생성', time: '2hr', desc: 'Sheets 자동화 ($250~), Dashboard ($600~)' }
      ],
      deliverable: '✅ 수주 채널 오픈',
      tips: [
        'Upwork Title에 "Korean + English" 명시 (차별화)',
        'Fiverr는 "Portfolio building - 20% OFF" 각도',
        '프로필 사진 전문적으로 (캐주얼 OK, 너무 격식 X)'
      ]
    },
    {
      id: 'day3',
      day: 'Day 3',
      date: '+2일',
      focus: '제안서 템플릿 제작',
      time: '6시간',
      color: 'bg-green-500',
      tasks: [
        { id: 1, title: '제안서 템플릿 3개', time: '3hr', desc: '간단($300~), 중형($800~), 대형($2,000~)' },
        { id: 2, title: '첫 제안서 10개 제출', time: '3hr', desc: 'Upwork 프로젝트 검색 → 커스터마이징 → 제출' }
      ],
      deliverable: '✅ 제안서 10개 발송',
      tips: [
        '템플릿에 [Name], [specific requirement] 변수 남겨두기',
        '제목 읽고 5분 안에 커스터마이징',
        '너무 긴 제안서 X, 3-4 문단이 적당'
      ]
    },
    {
      id: 'day4',
      day: 'Day 4',
      date: '+3일',
      focus: '제안서 폭탄 투하',
      time: '8시간',
      color: 'bg-green-600',
      tasks: [
        { id: 1, title: '제안서 10개 더 제출', time: '4hr', desc: '누적 20개' },
        { id: 2, title: '프로젝트 리서치', time: '2hr', desc: '경쟁자 제안 분석, 가격대 확인' },
        { id: 3, title: '응답 대기 & 준비', time: '2hr', desc: '자주 묻는 질문 답변 준비' }
      ],
      deliverable: '✅ 이 20개 제안서 발송',
      tips: [
        '응답률 10-20% 예상 = 2-4개 응답',
        '24시간 안에 응답 오는 것들 = 급한 고객 = 좋음',
        '무응답이 정상, 낙담 금지'
      ]
    },
    {
      id: 'day5',
      day: 'Day 5',
      date: '+4일',
      focus: '응답 대응 시작',
      time: '6시간',
      color: 'bg-yellow-500',
      tasks: [
        { id: 1, title: '응답 온 제안 대응', time: '3hr', desc: '상세 제안, 가격 협상, 일정 조율' },
        { id: 2, title: '제안서 5개 추가', time: '2hr', desc: '누적 25개' },
        { id: 3, title: 'Week 1 복기', time: '1hr', desc: '응답률, 피드백 분석' }
      ],
      deliverable: '✅ 협상 진행 중 1-2건',
      tips: [
        '가격 깎으려는 고객 = 정상, 10-20% 협상 가능',
        '"When can you start?" = 좋은 신호',
        '계약서 꼼꼼히 읽기 (Upwork는 플랫폼 보호)'
      ]
    },
    {
      id: 'day6',
      day: 'Day 6-7',
      date: '주말',
      focus: '2차 포트폴리오 & 마케팅',
      time: '10시간',
      color: 'bg-orange-500',
      tasks: [
        { id: 1, title: '카페24 알림봇 개발', time: '4hr', desc: '주문 → Slack/Email 자동 알림' },
        { id: 2, title: '데모 영상 제작', time: '2hr', desc: 'YouTube 3분 시연 영상' },
        { id: 3, title: '블로그 글 작성', time: '2hr', desc: '"카페24 자동화 5가지"' },
        { id: 4, title: 'LinkedIn 포스팅', time: '1hr', desc: '스튜디오 시작 공지' },
        { id: 5, title: '커뮤니티 활동', time: '1hr', desc: '피드백 요청' }
      ],
      deliverable: '✅ 포트폴리오 2개 + 마케팅 시작',
      tips: [
        '완벽한 코드 필요 없음, 작동만 하면 OK',
        '영상은 Loom 쓰면 편함 (무료)',
        'LinkedIn에 Upwork 프로필 링크 꼭 넣기'
      ]
    }
  ];

  const week2Plan = [
    {
      id: 'day8',
      day: 'Day 8',
      date: '+7일',
      focus: '지속 공격 + 개선',
      time: '6시간',
      color: 'bg-indigo-500',
      tasks: [
        { id: 1, title: '제안서 5개 추가', time: '2hr', desc: '누적 30개' },
        { id: 2, title: '응답 대응', time: '2hr', desc: '협상 진행, 계약 체결 시도' },
        { id: 3, title: '포트폴리오 개선', time: '2hr', desc: 'Case Study 디테일 추가' }
      ],
      deliverable: '응답 누적 3-5개 예상',
      tips: []
    },
    {
      id: 'day9',
      day: 'Day 9',
      date: '+8일',
      focus: '협상 & 제출',
      time: '6시간',
      color: 'bg-indigo-600',
      tasks: [
        { id: 1, title: '제안서 5개', time: '2hr', desc: '누적 35개' },
        { id: 2, title: '협상 중인 건 푸시', time: '3hr', desc: '가격 조정, 일정 확정' },
        { id: 3, title: '팔로업 메시지', time: '1hr', desc: '3일 지난 제안 재연락' }
      ],
      deliverable: '계약 가능성 높은 건 2-3개',
      tips: []
    },
    {
      id: 'day10',
      day: 'Day 10',
      date: '+9일',
      focus: '추가 공격',
      time: '6시간',
      color: 'bg-pink-500',
      tasks: [
        { id: 1, title: '제안서 5개', time: '2hr', desc: '누적 40개' },
        { id: 2, title: 'Fiverr 최적화', time: '2hr', desc: 'Gig 이미지, 설명 개선' },
        { id: 3, title: '응답 대응', time: '2hr', desc: '계약 체결 집중' }
      ],
      deliverable: '첫 계약 가능성 50%',
      tips: []
    },
    {
      id: 'day11',
      day: 'Day 11-12',
      date: '+10-11일',
      focus: '결과 판단 시점',
      time: '변동',
      color: 'bg-red-500',
      tasks: [
        { id: 1, title: '상황 평가', time: '2hr', desc: '계약 여부, 응답 수, 피드백 분석' },
        { id: 2, title: '전략 조정', time: '4hr', desc: '시나리오별 대응 (아래 참고)' }
      ],
      deliverable: '다음 단계 결정',
      tips: []
    },
    {
      id: 'day13',
      day: 'Day 13-14',
      date: '주말',
      focus: '재정비 & 다음 스프린트',
      time: '4시간',
      color: 'bg-gray-600',
      tasks: [
        { id: 1, title: '2주 복기', time: '2hr', desc: '무엇이 먹혔나, 안 먹혔나' },
        { id: 2, title: 'TokéToké 정리 계획', time: '1hr', desc: '언제 어떻게 정리할지' },
        { id: 3, title: 'Phase B 준비', time: '1hr', desc: '마이크로 SaaS 아이템 리스트업' }
      ],
      deliverable: '✅ 2주 완료, 다음 단계 계획',
      tips: []
    }
  ];

  const scenarios = [
    {
      name: '✅ Best Case',
      probability: '40%',
      condition: '첫 계약 1개 이상',
      action: [
        '프로젝트 즉시 시작',
        '2-3주 안에 완료 → 리뷰 받기',
        '다음 계약 따기 (리뷰 있으면 유리)',
        'TokéToké 정리 타이밍 잡기'
      ],
      color: 'border-green-500'
    },
    {
      name: '⚠️ Okay Case',
      probability: '40%',
      condition: '응답 3-5개, 계약 협상 중',
      action: [
        '제안서 20개 더 제출',
        '협상 계속 진행',
        '2주 더 버티기',
        '가격 10-20% 조정 고려'
      ],
      color: 'border-yellow-500'
    },
    {
      name: '❌ Worst Case',
      probability: '20%',
      condition: '응답 거의 없음 (2개 이하)',
      action: [
        '전략 재검토: 가격 30% 낮추기',
        '토콩/숨고 병행 시작',
        '또는 Phase B로 즉시 전환',
        'TokéToké 최대한 유지'
      ],
      color: 'border-red-500'
    }
  ];

  const milestones = [
    { day: 1, title: '포트폴리오 1개', icon: FileText },
    { day: 2, title: '프로필 오픈', icon: Star },
    { day: 4, title: '제안서 20개', icon: Send },
    { day: 7, title: '포트폴리오 2개', icon: Target },
    { day: 10, title: '제안서 40개', icon: Send },
    { day: 14, title: '첫 계약 목표', icon: DollarSign }
  ];

  const calculateProgress = () => {
    const totalTasks = [...week1Plan, ...week2Plan].reduce((sum, day) => sum + day.tasks.length, 0);
    const completed = Object.values(completedTasks).filter(Boolean).length;
    return Math.round((completed / totalTasks) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                2주 Upwork 속공 전략
              </h1>
              <p className="text-purple-200 text-lg">
                Phase A: 포트폴리오 구축 + 첫 수주
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-purple-400">
                {calculateProgress()}%
              </div>
              <div className="text-sm text-purple-200">진행률</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-8 bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            주요 마일스톤
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="bg-slate-700 rounded-lg p-4 text-center">
                <milestone.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-purple-300">D+{milestone.day}</div>
                <div className="text-sm text-slate-300 mt-1">{milestone.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Week 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Week 1: 기반 구축
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {week1Plan.map((day) => (
              <div
                key={day.id}
                className="bg-slate-800 rounded-xl p-6 border-2 border-transparent hover:border-purple-500 transition-all cursor-pointer"
                onClick={() => setSelectedDay(selectedDay === day.id ? null : day.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${day.color}`}>
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold">{day.focus}</h3>
                    <p className="text-slate-400 text-sm">{day.date}</p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{day.time}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {day.tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3 p-2 rounded hover:bg-slate-700">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTask(day.id, task.id);
                        }}
                        className="mt-1 flex-shrink-0"
                      >
                        {completedTasks[`${day.id}-${task.id}`] ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold ${completedTasks[`${day.id}-${task.id}`] ? 'line-through text-slate-500' : ''}`}>
                            {task.title}
                          </span>
                          <span className="text-xs text-purple-300">{task.time}</span>
                        </div>
                        {selectedDay === day.id && (
                          <p className="text-sm text-slate-400 mt-1">{task.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <Target className="w-4 h-4" />
                    {day.deliverable}
                  </div>
                  
                  {selectedDay === day.id && day.tips.length > 0 && (
                    <div className="mt-4 bg-slate-700 rounded p-3">
                      <div className="text-sm font-semibold text-yellow-400 mb-2">💡 Tips</div>
                      <ul className="space-y-1 text-sm text-slate-300">
                        {day.tips.map((tip, idx) => (
                          <li key={idx}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Week 2: 수주 & 판단
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {week2Plan.map((day) => (
              <div
                key={day.id}
                className="bg-slate-800 rounded-xl p-6 border-2 border-transparent hover:border-purple-500 transition-all cursor-pointer"
                onClick={() => setSelectedDay(selectedDay === day.id ? null : day.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${day.color}`}>
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold">{day.focus}</h3>
                    <p className="text-slate-400 text-sm">{day.date}</p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{day.time}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {day.tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3 p-2 rounded hover:bg-slate-700">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTask(day.id, task.id);
                        }}
                        className="mt-1 flex-shrink-0"
                      >
                        {completedTasks[`${day.id}-${task.id}`] ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold ${completedTasks[`${day.id}-${task.id}`] ? 'line-through text-slate-500' : ''}`}>
                            {task.title}
                          </span>
                          <span className="text-xs text-purple-300">{task.time}</span>
                        </div>
                        {selectedDay === day.id && (
                          <p className="text-sm text-slate-400 mt-1">{task.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <Target className="w-4 h-4" />
                    {day.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2주 후 시나리오 */}
        <div className="bg-slate-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">2주 후 예상 시나리오</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className={`bg-slate-700 rounded-lg p-6 border-2 ${scenario.color}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{scenario.name}</h3>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                    {scenario.probability}
                  </span>
                </div>
                <p className="text-purple-200 mb-4 font-semibold">{scenario.condition}</p>
                <div className="space-y-2">
                  {scenario.action.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400 mt-1">→</span>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">🎯 핵심 목표</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Week 1</div>
              <ul className="space-y-1 text-purple-200">
                <li>• 포트폴리오 2개 완성</li>
                <li>• Upwork/Fiverr 프로필 오픈</li>
                <li>• 제안서 25개 발송</li>
                <li>• 응답 2-5개 받기</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Week 2</div>
              <ul className="space-y-1 text-purple-200">
                <li>• 제안서 40개 누적</li>
                <li>• 첫 계약 1개 목표</li>
                <li>• TokéToké 정리 타이밍 판단</li>
                <li>• Phase B 준비 시작</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-slate-400">
          클릭하면 상세 내용이 펼쳐집니다 | 체크박스로 진행 상황 추적
        </div>
      </div>
    </div>
  );
};

export default UpworkSprintDashboard;
