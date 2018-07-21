# FirstStep
Generate，Accelerated-Speed

ai.html那个页面点击Generate按钮，然后再左边点击就会生成随机点，控制台会看到生成的点

*Min: ai.html与RandomPoint.html里边，鼠标点击坐标没有算对（这个涉及屏幕坐标、DOM中坐标的问题），滚动到画布下方点击时错误。*

RandomPoint.html是点击Deformation按钮，然后再左边点击，此时会生成一个点，不要松开继续滑动鼠标就会根据加速度画点

加速度的那个功能我大概实现了，就是现在有三个问题，

  1.就是我的clearRect函数没擦除已经生成的点。
  *Min: ctx.beginPath()与ctx.closePath()需要成对出现，我纠正了RandomPoint.html的代码。https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing*
  
  2.还有我本来想弄成空心圆，但他会把我鼠标移动的路径也画出来。

  *Min:不太理解这个问题，直觉上应该是ctx.beginPath()与ctx.closePath()，没有对绘制路径进行封闭*

  3.加速度会有负值，我把为负值的加速度设为了0.5，正值的加速度设为自乘了10倍，因为有的加速度真的很小

  *Min:这个你先对加速度的可取值范围进行调查（把所有的加速度取值保存下来），看看是什么范围，然后定义一个更合理的加速度到半径的对应关系*

  *PS：你的代码里边，js里边的局部、全局变量的使用混乱，容易出错* 


＃SecondStep

你集中精力在鼠标反馈变形(以后，我们把这个叫做dynamic cursor)的实验上，实现：
1. 保证以上功能正确
2. 添加一个尾迹效果，即，只显示最新若干个圆圈，而不是显示所有鼠标经过的
3. 在2的基础上，实现圆圈的渐渐消失效果



