import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  Zap,
  Brain,
  Layers,
  Lightbulb,
  UserCheck,
  ArrowDown,
  Settings,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-xl font-bold text-black">assist for business</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            機能
          </Link>
          <Link href="#results" className="text-sm font-medium hover:text-blue-600 transition-colors">
            導入効果
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            料金
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            お問い合わせ
          </Link>
        </nav>
        <Button className="ml-4 bg-blue-600 text-white hover:bg-blue-700 border border-blue-600">無料相談</Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-300 via-brand-200 to-brand-400">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-brand-light to-brand-dark px-3 py-1 text-sm text-white font-bold">
                    人材育成プラットフォーム
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 drop-shadow-lg">
                    SELFingで社員の『なりたい』を企業の『力』に変える
                  </h1>
                  <p className="max-w-[600px] text-gray-800 md:text-xl font-medium drop-shadow-sm">
                    従業員の自己実現と企業成長を同時に実現。データドリブンな人材育成で確実な成果を創出する統合プラットフォーム。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    無料トライアル開始
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    資料ダウンロード
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>最短2週間で導入開始</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>30日間無料トライアル</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[600px] h-[400px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XsiaotqbNy4vcPDvhYIS9UtwZsWKaB.png"
                    width={600}
                    height={400}
                    alt="部門管理画面"
                    className="absolute inset-0 aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-2xl opacity-100 animate-fade-in-out"
                    style={{ animationDelay: "0s" }}
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pc_mandala%202-pBuKWUvzF7FDHRAm5nQ8efYWCe8Mp6.png"
                    width={600}
                    height={400}
                    alt="マンダラチャート画面"
                    className="absolute inset-0 aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-2xl opacity-0 animate-fade-in-out"
                    style={{ animationDelay: "4s" }}
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AD%E3%83%AB%E3%82%BB%E3%83%83%E3%83%88%E7%94%BB%E9%9D%A2v2-UR6IXXOqbUKt2lapVtz8AGzwi0IfMk.png"
                    width={600}
                    height={400}
                    alt="スキルマスタ設定画面"
                    className="absolute inset-0 aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-2xl opacity-0 animate-fade-in-out"
                    style={{ animationDelay: "8s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Layer Skill Map & Gamification */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                企業のスキル定義を実現する"スキル型LMS"
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                体系的なスキル定義から実践まで、ゲーム感覚で楽しく成長できる仕組み
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* 4-Layer Structure */}
              <div className="mb-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                    <h3 className="text-2xl font-bold text-white">4階層構造のスキル定義とコンテンツ紐づけ</h3>
                    <p className="text-green-100">明確な定義から実践的な習得まで、段階的にスキルを構築</p>
                  </div>

                  <div className="p-8">
                    {/* Vertical Step Process */}
                    <div className="max-w-4xl mx-auto">
                      {/* Step 1 */}
                      <div className="relative pl-12 pb-8 border-l-4 border-blue-500">
                        <div className="absolute -left-6 top-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          1
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-blue-800 mb-3">スキル定義層</h4>
                          <p className="text-blue-700 mb-4">
                            業務に必要なスキルを明確に定義・分類し、企業独自のスキル体系を構築
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                              <div className="font-semibold text-blue-800">技術スキル</div>
                              <div className="text-blue-600">プログラミング、データ分析など</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                              <div className="font-semibold text-blue-800">ビジネススキル</div>
                              <div className="text-blue-600">企画力、マーケティングなど</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                              <div className="font-semibold text-blue-800">ヒューマンスキル</div>
                              <div className="text-blue-600">コミュニケーション、リーダーシップなど</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative pl-12 pb-8 border-l-4 border-green-500">
                        <div className="absolute -left-6 top-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          2
                        </div>
                        <div className="bg-green-50 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-green-800 mb-3">階層設定層</h4>
                          <p className="text-green-700 mb-4">
                            4階層構造でスキルを体系化し、段階的な成長プロセスを明確化
                          </p>
                          <div className="grid grid-cols-4 gap-3 text-sm">
                            <div className="bg-white p-3 rounded text-center border-b-4 border-green-400">
                              <div className="font-semibold text-green-800">基礎層</div>
                              <div className="text-green-600">基本知識</div>
                            </div>
                            <div className="bg-white p-3 rounded text-center border-b-4 border-green-400">
                              <div className="font-semibold text-green-800">応用層</div>
                              <div className="text-green-600">実践スキル</div>
                            </div>
                            <div className="bg-white p-3 rounded text-center border-b-4 border-green-400">
                              <div className="font-semibold text-green-800">専門層</div>
                              <div className="text-green-600">高度技術</div>
                            </div>
                            <div className="bg-white p-3 rounded text-center border-b-4 border-green-400">
                              <div className="font-semibold text-green-800">指導層</div>
                              <div className="text-green-600">教育・管理</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative pl-12 pb-8 border-l-4 border-purple-500">
                        <div className="absolute -left-6 top-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          3
                        </div>
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-purple-800 mb-3">学習コンテンツ層</h4>
                          <p className="text-purple-700 mb-4">
                            多様な学習方法を統合的に提供し、効果的なスキル習得を支援
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                              <div className="font-semibold text-purple-800">オンライン研修</div>
                              <div className="text-purple-600">動画・eラーニング</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                              <div className="font-semibold text-purple-800">実践プロジェクト</div>
                              <div className="text-purple-600">OJT・実務経験</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                              <div className="font-semibold text-purple-800">資格取得支援</div>
                              <div className="text-purple-600">認定試験・外部研修</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="relative pl-12">
                        <div className="absolute -left-6 top-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          4
                        </div>
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-orange-800 mb-3">実践・評価層</h4>
                          <p className="text-orange-700 mb-4">実際の業務での活用と成果測定により、スキルの定着を確認</p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                              <div className="font-semibold text-orange-800">実務適用</div>
                              <div className="text-orange-600">業務での実践活用</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                              <div className="font-semibold text-orange-800">成果評価</div>
                              <div className="text-orange-600">定量的効果測定</div>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                              <div className="font-semibold text-orange-800">フィードバック</div>
                              <div className="text-orange-600">継続的改善支援</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Dashboard Image */}
              <div className="mb-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6">
                    <h3 className="text-2xl font-bold text-white">実際のスキル管理画面</h3>
                    <p className="text-teal-100">企業が設定したスキルの4階層構造に基づく学習進捗管理</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center">
                      <div className="w-full">
                        <Image
                          src="/images/skill-hierarchy-dashboard.png"
                          width={1400}
                          height={800}
                          alt="スキル階層管理画面"
                          className="w-full max-w-7xl mx-auto rounded-xl object-contain shadow-lg border border-gray-200"
                        />
                        <p className="text-center text-sm text-gray-500 mt-4 max-w-4xl mx-auto">
                          人事スキルの4階層構造（営業基礎→顧客理解→ニーズ分析・課題発見）が明確に定義され、
                          各階層に対応する学習コンテンツとバッジシステムが統合された実際の管理画面
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gamification System */}
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-6">ゲーミフィケーション機能</h3>

                    {/* Achievement Badges */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🏆</span>
                        </div>
                        達成バッジシステム
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-yellow-50 p-3 rounded-lg text-center">
                          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">🥇</span>
                          </div>
                          <div className="text-xs font-medium">スキルマスター</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">📚</span>
                          </div>
                          <div className="text-xs font-medium">学習王</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">🎯</span>
                          </div>
                          <div className="text-xs font-medium">目標達成</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Tracking */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        進捗可視化
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">プロジェクトマネジメント</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">データ分析</span>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Path */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-600" />
                        学習パス
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">基礎研修完了</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                          <div className="w-4 h-4 border-2 border-blue-600 rounded-full"></div>
                          <span className="text-sm">実践プロジェクト進行中</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                          <span className="text-sm text-gray-500">資格取得準備</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-6">スキル実現プロセス</h3>

                    {/* Process Flow */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800 mb-1">スキル診断</h5>
                          <p className="text-sm text-blue-700">現在のスキルレベルを正確に測定</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-800 mb-1">学習計画作成</h5>
                          <p className="text-sm text-green-700">個人に最適化された学習ロードマップを自動生成</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-800 mb-1">実践学習</h5>
                          <p className="text-sm text-purple-700">ゲーム感覚で楽しく学習を継続</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-800 mb-1">成果確認</h5>
                          <p className="text-sm text-orange-700">バッジ獲得と実務での成果を可視化</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-yellow-800 mb-1">ゲーミフィケーション効果</h5>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• 学習への取り組み意欲向上</li>
                            <li>• スキル習得プロセスの効率化</li>
                            <li>• 従業員のエンゲージメント向上</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Personal Development Approach */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                AIを使った統合的人材育成と1on1
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                性格診断からキャリア分析まで、個人に最適化された成長支援を1on1で統合管理
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-6 text-center">AI統合プロセス</h3>

                    {/* Step 1: AI性格診断 */}
                    <div className="flex items-start gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">AI性格診断</h4>
                        <p className="text-sm text-blue-700">
                          AIが行動パターンや価値観を分析し、個人の特性・強み・成長ポイントを明確化
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center mb-4">
                      <ArrowDown className="h-6 w-6 text-gray-400" />
                    </div>

                    {/* Step 2: AIマンダラ目標設定 */}
                    <div className="flex items-start gap-4 mb-6 p-4 bg-green-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">AIマンダラ目標設定伴走</h4>
                        <p className="text-sm text-green-700">
                          性格診断結果を基に、AIが81マスのマンダラチャートを提案し、目標設定を伴走サポート
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center mb-4">
                      <ArrowDown className="h-6 w-6 text-gray-400" />
                    </div>

                    {/* Step 3: AIキャリア傾向診断 */}
                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">AIキャリア傾向診断</h4>
                        <p className="text-sm text-purple-700">
                          性格診断とマンダラ結果を統合し、AIが最適なキャリアパスと成長方向性を提案
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-6 text-center">1on1統合ダッシュボード</h3>
                    <div className="bg-gradient-to-r from-brand-100 to-brand-200 rounded-lg p-6">
                      <h4 className="font-semibold text-brand-800 mb-4">1on1で一元確認できる情報</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <Brain className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">AI性格診断結果と特性分析</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <Target className="h-5 w-5 text-green-600" />
                          <span className="text-sm">マンダラチャート目標進捗</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <TrendingUp className="h-5 w-5 text-purple-600" />
                          <span className="text-sm">AIキャリア傾向と推奨アクション</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <BarChart3 className="h-5 w-5 text-orange-600" />
                          <span className="text-sm">スキル学習進捗と習得状況</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-yellow-800 mb-1">統合効果</h5>
                          <p className="text-sm text-yellow-700">
                            個人の特性・目標・キャリア志向・スキル進捗を統合的に把握することで、
                            より効果的で個人に最適化された1on1が実現できます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid gap-6 md:grid-cols-4">
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">スキル設計とスキルの実現</h4>
                  <p className="text-sm text-gray-600">企業独自のスキル体系を設計し、実践的な習得プロセスを構築</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">個人最適化</h4>
                  <p className="text-sm text-gray-600">AIが個人の特性を深く理解し、最適な成長プランを継続的に提案</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">1on1効率化</h4>
                  <p className="text-sm text-gray-600">
                    必要な情報が統合されたダッシュボードで、質の高い対話を効率的に実現
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">統合管理</h4>
                  <p className="text-sm text-gray-600">
                    性格・目標・キャリア・スキルを一元管理し、包括的な人材育成を実現
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                こんな課題を抱えていませんか？
              </h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                多くの企業が人材育成で直面する課題を、assist for businessが包括的に解決します
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 mb-12">
              {/* Case 1: スキル定義の課題 */}
              <Card className="p-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-start mb-6">
                  <div className="space-y-3">
                    <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800 font-medium">
                      よくある課題①
                    </div>
                    <h3 className="text-xl font-bold text-red-700">
                      「スキルの定義ができない、してもそれを企業内で実践できない」
                    </h3>
                    <div className="space-y-2 text-sm text-red-600">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>スキル要件が曖昧で評価基準が不明確</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>学習コンテンツとスキルが紐づいていない</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>実践的なスキル獲得の仕組みがない</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white font-bold">
                      スキルアップ機能による解決
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        <strong>4階層構造のスキル定義</strong>により、明確で実践的なスキル体系を構築。
                        LMS・オンライン研修・オフライン研修・資格取得を統合的に紐づけ、現実的なスキル獲得を実現します。
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">実現される効果</h4>
                        <ul className="space-y-1 text-sm text-blue-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>体系的なスキル定義と評価基準の明確化</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>学習コンテンツとスキルの完全連携</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>実践的なスキル獲得プロセスの構築</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>スキル習得進捗の可視化と管理</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="max-w-4xl w-full">
                    <Image
                      src="/images/skill-map-dashboard.png"
                      width={1200}
                      height={700}
                      alt="スキルマップ管理画面"
                      className="w-full h-auto rounded-xl object-contain shadow-lg border border-gray-200"
                    />
                    <p className="text-center text-sm text-gray-500 mt-3">
                      学習画面が企業の設定したスキルの階層構造になっていてコミットされている実際の管理画面
                    </p>
                  </div>
                </div>
              </Card>

              {/* Case 2: SELFingによる自己実現支援 */}
              <Card className="p-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_2fr] items-start">
                  <div className="space-y-3">
                    <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800 font-medium">
                      よくある課題②
                    </div>
                    <h3 className="text-xl font-bold text-red-700">「従業員の自己実現と事業成長を両立できない」</h3>
                    <div className="space-y-2 text-sm text-red-600">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>個人の「なりたい自分」が不明確</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>自己実現と事業目標が分離している</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>持続的な成長の仕組みがない</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 font-medium">
                      SELFingによる価値提供モデル
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        <strong>SELFing（自己実現プロセス）</strong>を中心とした価値提供モデルで、
                        「なりたい自分」の明確化から実現まで、マンダラチャートを活用した体系的支援を提供。
                        個人の可能性と社会的価値を最大化します。
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">SELFingフレームワークの効果</h4>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-green-700 mb-1">個人レベル</h5>
                            <ul className="space-y-1 text-xs text-green-600">
                              <li>• 自己理解と目標設計の明確化</li>
                              <li>• 主体性・自律性の醸成</li>
                              <li>• 内発的動機付けの向上</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 mb-1">組織レベル</h5>
                            <ul className="space-y-1 text-xs text-green-600">
                              <li>• エンゲージメント向上</li>
                              <li>• 心理的安全性の向上</li>
                              <li>• 組織文化変革の実現</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">AI統合による個人・組織価値創造</h4>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">AI性格診断</span>
                          <span className="text-purple-600">→</span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">マンダラ目標設定</span>
                          <span className="text-purple-600">→</span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">キャリア傾向分析</span>
                          <span className="text-purple-600">→</span>
                          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">1on1統合管理</span>
                        </div>
                        <p className="text-xs text-purple-700 mt-2">
                          個人の可能性を最大化し、組織の成長に直結する価値創造サイクル
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">プラン選択</h2>
              <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                企業規模や導入目的に合わせて最適なプランをお選びください
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="p-6 relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">ベーシック</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">小規模企業向け</CardDescription>
                  <div className="text-4xl font-bold text-brand-600 mb-2">¥50,000</div>
                  <div className="text-sm text-gray-500">月額 / 50名まで</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">SELFing機能</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">基本スキルマップ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">1on1サポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">基本レポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">メールサポート</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-brand-600 hover:bg-brand-700">無料トライアル開始</Button>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="p-6 relative border-2 border-brand-500">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">おすすめ</span>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">スタンダード</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">中規模企業向け</CardDescription>
                  <div className="text-4xl font-bold text-brand-600 mb-2">¥150,000</div>
                  <div className="text-sm text-gray-500">月額 / 200名まで</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">全SELFing機能</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">4階層スキルマップ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">AI統合1on1</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">詳細分析レポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">電話・チャットサポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">導入コンサルティング</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-brand-600 hover:bg-brand-700">無料トライアル開始</Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="p-6 relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">エンタープライズ</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">大規模企業向け</CardDescription>
                  <div className="text-4xl font-bold text-brand-600 mb-2">お問い合わせ</div>
                  <div className="text-sm text-gray-500">カスタム対応</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">全機能無制限</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">カスタムスキル設計</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">専用AI機能開発</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">リアルタイム分析</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">専任サポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">オンサイト導入支援</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-brand-600 hover:bg-brand-700">お問い合わせ</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">すべてのプランで30日間無料トライアル実施中</p>
              <div className="flex justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>初期費用無料</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>いつでも解約可能</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>データ移行サポート</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Slider */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-100">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">機能紹介</h2>
              <p className="text-brand-900 md:text-lg max-w-3xl mx-auto">人材育成を革新する統合プラットフォーム</p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {/* Feature Card 1 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">SELFing機能</CardTitle>
                    <CardDescription>従業員の内発的動機を引き出す</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      自己理解を深め、個人のビジョンと企業目標を戦略的に整合させます。
                    </p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>価値観・強み診断</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>キャリアビジョン設定</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>目標すり合わせ機能</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feature Card 2 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-300 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">スキルマップ</CardTitle>
                    <CardDescription>組織全体のスキルを可視化</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      スキル状況を一元管理し、戦略的な人材育成計画を策定できます。
                    </p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>スキルレベル可視化</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>ギャップ分析</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>育成計画自動生成</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feature Card 3 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">1on1サポート</CardTitle>
                    <CardDescription>質の高い1on1を実現</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">構造化されたフレームワークで効果的な1on1をサポートします。</p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>話題自動提案</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>進捗トラッキング</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>効果測定レポート</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feature Card 4 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">学習管理</CardTitle>
                    <CardDescription>個別最適化された学習体験</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">一人ひとりに最適化された学習プログラムを提供します。</p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>パーソナライズ学習</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>進捗可視化</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>ROI測定</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feature Card 5 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-300 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">組織分析</CardTitle>
                    <CardDescription>データドリブンな組織運営</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">組織の健康状態を定量的に把握し、改善施策を提案します。</p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>エンゲージメント測定</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>離職リスク予測</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>改善提案機能</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Feature Card 6 */}
                <Card className="flex-shrink-0 w-80 h-96">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">統合ダッシュボード</CardTitle>
                    <CardDescription>すべてを一元管理</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">人材育成に関するすべての情報を統合したダッシュボード。</p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>リアルタイム監視</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>カスタムレポート</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>アラート機能</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-brand-light to-brand-dark"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                今すぐ始めませんか？
              </h2>
              <p className="text-brand-100 md:text-lg max-w-3xl mx-auto">
                30日間の無料トライアルで、SELFingの効果を実感してください。
                専任コンサルタントがあなたの企業に最適な活用方法をご提案します。
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center items-center">
                <Button size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
                  無料トライアル開始
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  資料請求・お問い合わせ
                </Button>
              </div>
              <div className="max-w-md mx-auto">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="メールアドレスを入力"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button type="submit" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
                    送信
                  </Button>
                </form>
                <p className="text-xs text-brand-100 mt-2">資料請求いただいた方には、導入事例集を無料でプレゼント</p>
              </div>
            </div>
          </div>
        </section>
        {/* Floating Contact Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="animate-big-bounce">
            <div className="relative">
              {/* 吹き出しの尻尾 */}
              <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[15px] border-t-blue-600"></div>
              {/* メインの吹き出し */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-2xl rounded-2xl px-8 py-6 text-white font-bold cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-lg mb-1">💬 営業担当へ</div>
                  <div className="text-sm opacity-90">お気軽にご相談ください</div>
                  <div className="text-xs opacity-75 mt-1">無料相談受付中</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 SELFing. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            プライバシーポリシー
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            利用規約
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            特定商取引法
          </Link>
        </nav>
      </footer>
    </div>
  )
}
