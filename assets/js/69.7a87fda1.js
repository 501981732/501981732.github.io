(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{208:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("Docker是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署。")]),e._v(" "),r("p",[e._v("Docker 是个划时代的开源项目，它彻底释放了计算虚拟化的威力，极大提高了应用的维护效率，降低了云计算应用开发的成本！使用 Docker，可以让应用的部署、测试和分发都变得前所未有的高效和轻松！")]),e._v(" "),r("p",[e._v("Docker Go 语言 进行开发实现，基于 Linux 内核的 cgroup，namespace，以及 AUFS 类的 Union FS 等技术，对进程进行封装隔离，属于 操作系统层面的虚拟化技术。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),e._v(" "),r("p",[e._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),e._v(" "),r("p",[e._v("Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。")]),e._v(" "),r("p",[e._v("下面的图片比较了 Docker 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("软件开发的问题之一：环境配置问题，我们必须确保在不同的机器上操作系统的设置，各种依赖包和组件的安装都是一样的，假如我们好不容易配置好环境，在换一个机器还要重新配置。可不可以安装软件的时候把原始环境一摸一样复制过来？")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高")]),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。")]),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("杜绝“这段代码在我机器上没问题啊”的问题")]),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。开发人员可以通过 Dockerfile 来进行镜像构建，并结合 持续集成(Continuous Integration) 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合 持续部署(Continuous Delivery/Deployment) 系统进行自动部署")]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("由于 Docker 确保了执行环境的一致性，使得应用的迁移更加容易。Docker 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。因此用户可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。")]),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("Docker 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。此外，Docker 团队同各个开源项目团队一起维护了一大批高质量的 官方镜像，既可以直接在生产环境使用，又可以作为基础进一步定制，大大的降低了应用服务的镜像制作成本")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),r("p",[e._v("操作系统分为内核和用户空间。对于 Linux 而言，内核启动后，会挂载 root 文件系统为其提供用户空间支持。而 Docker 镜像（Image），就相当于是一个 root 文件系统。")]),e._v(" "),r("p",[e._v("比如官方镜像 ubuntu:18.04 就包含了完整的一套 Ubuntu 18.04 最小系统的 root 文件系统。在比如node....")]),e._v(" "),r("p",[e._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),e._v(" "),e._m(22),e._v(" "),r("p",[e._v("分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。")]),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("镜像和容器的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),e._v(" "),r("p",[e._v("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 命名空间。因此容器可以拥有自己的 root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。")]),e._v(" "),e._m(24),e._v(" "),r("p",[e._v("镜像是多层存储，每一层是在前一层的基础上进行的修改；而容器同样也是多层存储，是在以镜像为基础层，在其基础上加一层作为容器运行时的存储层。")]),e._v(" "),r("p",[e._v("容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。")]),e._v(" "),e._m(25),e._v(" "),r("p",[e._v("镜像构建完成后，就在当前宿主机上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，Docker Registry 就是这样的服务。")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),r("p",[e._v("mac: Homebrew")]),e._v(" "),e._m(28),e._v(" "),r("p",[e._v("https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac\nhttps://yeasy.gitbooks.io/docker_practice/content/install/mac.html")]),e._v(" "),r("p",[e._v("cenOS:")]),e._v(" "),e._m(29),e._v(" "),r("p",[e._v("检查安装版本")]),e._v(" "),e._m(30),r("p",[e._v("尝试运行一个nginx服务")]),e._v(" "),e._m(31),r("p",[e._v("停止nginx并删除")]),e._v(" "),e._m(32),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),r("p",[e._v("1.获取镜像")]),e._v(" "),e._m(36),e._v(" "),r("p",[e._v("2.我们就能够以这个镜像为基础启动并运行一个容器")]),e._v(" "),e._m(37),e._v(" "),r("p",[e._v("3.列出镜像")]),e._v(" "),e._m(38),e._v(" "),r("p",[e._v("4.删除镜像")]),e._v(" "),e._m(39),e._v(" "),r("p",[e._v("5.定制镜像")]),e._v(" "),e._m(40),e._v(" "),r("p",[e._v("6.构建镜像")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),r("p",[e._v("1.启动容器")]),e._v(" "),e._m(44),e._v(" "),r("p",[e._v("2.后台运行 -d")]),e._v(" "),e._m(45),e._v(" "),r("p",[e._v("3.获取容器的输出信息")]),e._v(" "),e._m(46),e._v(" "),r("p",[e._v("4.终止容器")]),e._v(" "),e._m(47),e._v(" "),r("p",[e._v("5.重启容器")]),e._v(" "),e._m(48),e._v(" "),r("p",[e._v("6.进入容器")]),e._v(" "),e._m(49),e._v(" "),r("p",[e._v("7.删除容器")]),e._v(" "),e._m(50),e._v(" "),r("p",[e._v("7.导入导出")]),e._v(" "),e._m(51),e._v(" "),e._m(52),e._v(" "),r("p",[e._v("1.注册https://hub.docker.com")]),e._v(" "),r("p",[e._v("2.登录 docker login")]),e._v(" "),r("p",[e._v("3.查找 docker search [xxx]")]),e._v(" "),r("p",[e._v("4.拉取 docker pull [xxx]")]),e._v(" "),r("p",[e._v("5.推送  docker tag [xxx] username/[xxx] 然后  docker push username/[xxx]")]),e._v(" "),r("p",[e._v("5.自动构建 Docker Hub 指定跟踪一个目标网站（支持 GitHub 或 BitBucket）上的项目，一旦项目发生新的提交")]),e._v(" "),r("p",[e._v("6.私有仓库 ...")]),e._v(" "),e._m(53),e._v(" "),e._m(54),e._v(" "),e._m(55),e._v(" "),e._m(56),e._v(" "),r("p",[e._v("服务 (service)：一个应用容器，实际上可以运行多个相同镜像的实例。")]),e._v(" "),r("p",[e._v("项目 (project)：由一组关联的应用容器组成的一个完整业务单元。\n一个项目可以由多个服务（容器）关联而成，Compose 面向项目进行管理。")]),e._v(" "),r("p",[e._v("实例：")]),e._v(" "),e._m(57),e._m(58),e._v(" "),r("p",[e._v("负责在多种平台上快速安装 Docker 环境。")]),e._v(" "),e._m(59),e._v(" "),r("p",[e._v("提供 Docker 容器集群服务，是 Docker 官方对容器云生态进行支持的核心方案。")]),e._v(" "),r("p",[e._v("使用它，用户可以将多个 Docker 主机封装为单个大型的虚拟 Docker 主机，快速打造一套容器云平台。")]),e._v(" "),e._m(60),e._v(" "),r("p",[e._v("1.更新软件库")]),e._v(" "),e._m(61),e._v(" "),r("p",[e._v("2.安装docker")]),e._v(" "),e._m(62),e._v(" "),r("p",[e._v("3.启动docker服务")]),e._v(" "),e._m(63),e._v(" "),r("p",[e._v("4.设置docker开机启动")]),e._v(" "),e._m(64),e._v(" "),r("p",[e._v("5.开发node应用")]),e._v(" "),r("p",[e._v("6.创建Dockerfile .dockerignore文件")]),e._v(" "),r("p",[e._v("7.开发文件拷贝到开发机")]),e._v(" "),e._m(65),e._v(" "),e._m(66),e._v(" "),e._m(67),e._v(" "),e._m(68),e._v(" "),r("p",[e._v("9.查看端口占用")]),e._v(" "),e._m(69),e._v(" "),e._m(70),e._v(" "),e._m(71),e._v(" "),e._m(72),e._v(" "),r("p",[e._v("11.开启实例")]),e._v(" "),e._m(73),e._v(" "),e._m(74),e._v(" "),e._m(75),e._v(" "),r("p",[e._v("12.进入docker容器")]),e._v(" "),e._m(76),e._v(" "),e._m(77),e._v(" "),r("p",[e._v("13.从正在运行的docker容器里面，把文件拷贝到本机")]),e._v(" "),e._m(78),e._v(" "),e._m(79),e._v(" "),e._m(80),e._v(" "),r("p",[e._v("Dockerfile 中每一个指令都会建立一层,应该尽量减少层数，可以使用&& 串联命令 最多不超过127层。")]),e._v(" "),e._m(81),e._v(" "),e._m(82),e._v(" "),e._m(83),e._v(" "),e._m(84),e._v(" "),e._m(85),e._v(" "),e._m(86),e._v(" "),e._m(87),e._v(" "),r("p",[e._v("eg:")]),e._v(" "),e._m(88),e._m(89),e._v(" "),e._m(90),e._v(" "),e._m(91),e._v(" "),e._m(92),e._v(" "),e._m(93),r("p",[e._v("设置环境变量之后，后续指令就可以使用该环境变量，便于管理。")]),e._v(" "),e._m(94),e._v(" "),r("p",[e._v("node官方镜像")]),e._v(" "),e._m(95),e._v(" "),e._m(96),e._m(97),e._m(98),e._v(" "),r("p",[e._v("docker创建微服务人话版")]),e._v(" "),e._m(99),e._v(" "),e._m(100),e._v(" "),e._m(101),e._v(" "),e._m(102),e._v(" "),e._m(103),e._v(" "),e._m(104),e._v(" "),r("p",[e._v("1.轻量级: registator --\x3e consul --\x3e consul_template --\x3e nginx --\x3e docker")]),e._v(" "),e._m(105),e._v(" "),r("p",[e._v("2.kubernetes(k8s)搭建docker集群")]),e._v(" "),e._m(106),e._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53260098",target:"_blank",rel:"noopener noreferrer"}},[e._v("10分钟看懂Docker和K8S"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.51cto.com/ganbing/2086851",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker 入门阮一峰"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker微服务教程"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker从入门到实战"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://yuedu.baidu.com/ebook/d817967416fc700abb68fca1?fr=aladdin&key=docker&f=read",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker入门实战"),r("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"什么是docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("容器 = image-spec + runtime-spec")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("image-spec重点是分层文件系统")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("runtime-spec重点是namespace和cgroup")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v2e98233d419ea498794cbbb431c326ec4.png",alt:"image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"产生原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#产生原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 产生原因")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("虚拟机")]),this._v("就是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统。但是")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("占用资源多：我们真正需要的只有很少的内存，但是还是虚拟机还是需要至少几百MB运行。")]),this._v(" "),t("li",[this._v("步骤冗余")]),this._v(" "),t("li",[this._v("启动慢")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Linux 容器")]),this._v(" 解决了虚拟机的弊端，相当于轻量级的虚拟机。Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。属于进程级别的容器。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"为什么用docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么用docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么用docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("更高效的使用系统资源")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("更快速的启动时间")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("一致的运行环境")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("持续交付和部署")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("更轻松的迁移")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("更轻松的维护和扩展")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("对比虚拟机")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("特性")]),e._v(" "),r("th",[e._v("容器")]),e._v(" "),r("th",[e._v("虚拟机")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("启动")]),e._v(" "),r("td",[e._v("秒级")]),e._v(" "),r("td",[e._v("分钟级")])]),e._v(" "),r("tr",[r("td",[e._v("硬盘使用")]),e._v(" "),r("td",[e._v("一般为 MB")]),e._v(" "),r("td",[e._v("一般为 GB")])]),e._v(" "),r("tr",[r("td",[e._v("性能")]),e._v(" "),r("td",[e._v("接近原生")]),e._v(" "),r("td",[e._v("弱于")])]),e._v(" "),r("tr",[r("td",[e._v("系统支持量")]),e._v(" "),r("td",[e._v("单机支持上千个容器")]),e._v(" "),r("td",[e._v("一般几十个")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker的用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker的用途","aria-hidden":"true"}},[this._v("#")]),this._v(" docker的用途")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("web应用的自动化打包和发布；")]),e._v(" "),r("li",[e._v("自动化测试和持续集成、发布；")]),e._v(" "),r("li",[e._v("在服务型环境中部署和调整数据库或其他的后台应用；")]),e._v(" "),r("li",[e._v("从头编译或者扩展现有的OpenShift或Cloud；")]),e._v(" "),r("li",[e._v("Foundry平台来搭建自己的PaaS环境。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker基本概念","aria-hidden":"true"}},[this._v("#")]),this._v(" docker基本概念")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"镜像-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像-image","aria-hidden":"true"}},[this._v("#")]),this._v(" 镜像 Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Docker 设计时，就充分利用 Union FS 的技术，将其设计为"),t("strong",[this._v("分层存储")]),this._v("的架构。\n镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"容器-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器-container","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器 Container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为 "),t("strong",[this._v("容器存储层")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"仓库-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" 仓库 Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("一个 Docker Registry 中可以包含多个 仓库（Repository）；每个仓库可以包含多个 标签（Tag）；每个标签对应一个镜像。"),t("strong",[this._v("<仓库名>:<标签>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装","aria-hidden":"true"}},[this._v("#")]),this._v(" docker 安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("brew cask install docker\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("yum update -y\n\nyum install docker\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ docker --version\nDocker version 19.03.1, build 74b1e89\n$ docker-compose --version\ndocker-compose version 1.24.1, build 4667896b\n$ docker-machine --version\ndocker-machine version 0.16.1, build cce350d7\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker run -d -p 80:80 --name webserver nginx\n访问http://localhost\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ docker stop webserver\n$ docker rm webserver\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker使用","aria-hidden":"true"}},[this._v("#")]),this._v(" docker使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"docker-常用命令解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令解析","aria-hidden":"true"}},[this._v("#")]),this._v(" docker 常用命令解析")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.镜像")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]\n-it -i：交互式操作，一个是 -t 终端。\n--rm: 容器退出后将其删除。\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker run \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker image ls\ndocker image ls -a 显示所有\ndocker image ls [nginx] 根据仓库名列出镜像\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker image rm [选项] <镜像1> [<镜像2> ...]\n这里的镜像可以使镜像端id,长id,镜像名，镜像摘要等\ndocker image rm 501\ndocker image rm centos\ndocker image rm node@sha256:b4f0e0bdeb578043c1ea6862f0d40cc4afe32a4a582f3be235a3b164422be228\n配合ls命令\ndocker image rm $(docker image ls -q redis) 删除所有有仓库名为redis的镜像\ndocker image rm $(docker image ls -q -f before=mongo:3.2)删除3.2版本之前的\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- docker commit 一般很少使用\n- Dockerfile定制 **Dockerfile是我们定制镜像常用的，单独拿出来讲**\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- docker build -t <name> .\n- -t参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是latest。最后的那个点表示 Dockerfile 文件所在的路径,.实际上是在指定上下文的目录。  \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.容器")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("查看")]),this._v(" "),t("p",[this._v("docker container ls\ndocker container ls -a")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker run 基于镜像新建一个容器并启动\ndocker container start 直接将一个已经终止的容器启动\n--name命名\neg:docker run -d -p 80:80 --name webserver nginx\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 -d 参数来实现,会返回一个id\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker container logs [container ID or NAMES]\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker container stop [container ID or NAMES]\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker container restart [container ID or NAMES]\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker exec 配合 -i -t命令\n//-i -t 一起使用时，可以看到我们熟悉的 Linux 命令提示符\ndocker run -dit nginx\ndocker container ls\ndocker exec -it 69d1 bash\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("//删除一个终止的容器\ndocker container rm  [container ID or NAMES]\n//删除一个正在运行的容器\ndocker container rm  -f [container ID or NAMES]\n//清除所有终止容器\n//docker container prune\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker export 7691a814370e > ubuntu.tar\ndocker import - test/ubuntu:v1.0\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.仓库")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker三剑客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker三剑客","aria-hidden":"true"}},[this._v("#")]),this._v(" docker三剑客")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-compose定义和运行多个-docker-容器的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-compose定义和运行多个-docker-容器的应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Compose定义和运行多个 Docker 容器的应用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("场景：工作中很少单独使用一个容器，多容器相互配合来完成某项任务，比如一个web项目，除了web服务容器本身，还需要加上后端的数据库服务容器，负载均衡服务。需要编写docker-compose.yml来定义一组相关联的应用容器为一个项目。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("术语：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('version: \'3\' //版本\nservices:\n\n  web:\n    build: . //指定 Dockerfile 所在文件夹的路径,Compose 将会利用它自动构建这个镜像，然后使用这个镜像。\n    ports: //映射端口\n     - "5000:5000"\n\n  redis:\n    image: "redis:alpine" //指定镜像名\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-machine","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Machine")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Swarm")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker部署实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker部署实战","aria-hidden":"true"}},[this._v("#")]),this._v(" docker部署实战")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("yum update -y\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("yum install docker\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("service docker start\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("chkconfig docker on\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("scp hellodocker.zip root@124.156.110.41:/webapp/\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"8"}},[t("li",[this._v("将文件打包[构建 image 文件]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("docker build 命令会将该目录下的内容打包交给 Docker 引擎以帮助构建镜像")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker [image] build -t hellodocker .\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("#netstat -lnp|grep 8080\nlsof -i :8080\nps pid\nkill -9 pid\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"10"}},[t("li",[this._v("生成docker实例[生成容器]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("docker container run命令会从 image 文件生成容器。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("sudo docker build -t hellodocker .\ndocker ps -a 查看container状态\ndocker stop xx\n//删除实例\ndocker rm hellodocker\ndocker rmi hellodocker\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("后台开启\nsudo docker run -d --name hellodocker -p 80:8081 hellodocker\n进入容器\ndocker container run -p 8000:3000 -it hellodocker /bin/bash\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("参数解读")]),this._v(" -p:端口映射把容器的8081端口映射到本机的80端口")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("doker pm2集成")]),this._v(":\npm2改为pm2-docker\nhttp://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("sudo docker [container] exec -it [containerID] /bin/bash \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("参数解读")]),this._v("-it:容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。\n/bin/bash：容器启动以后，内部第一个执行的命令")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("docker container cp [containID]:[/path/to/file] \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dockerfile定制镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile定制镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" Dockerfile定制镜像")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("镜像的定制实际上就是定制每一层所添加的配置、文件。如果我们可以把每一层修改、安装、构建、操作的命令都写入一个脚本，用这个脚本来构建、定制镜像。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"指令详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令详解","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令详解")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("FROM指定基础镜像")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("定制镜像一定是以一个镜像为基础，docker hub上有很多高质量的官方镜像，服务类：nginx redis mysql php,语言类的node python golang等，更为基础的操作系统镜像ubuntu centos等 scratch表示空白镜像。使用 Go 语言 开发的应用很多会使用这种方式来制作镜像，这也是为什么有人认为 Go 是特别适合容器微服务架构的语言的原因之一。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("RUN执行命令")]),e._v(" "),r("ul",[r("li",[e._v("shell 格式：  RUN <命令>")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("RUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html\n")])])]),r("ul",[r("li",[e._v("exec格式： RUN ['可执行文件','参数1','参数2']")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("RUN \n")])])])]),e._v(" "),r("li",[r("p",[e._v("COPY 指令将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('- COPY [--chown=<user>:<group>] 源路径... <目标路径>\n- COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]\n<源路径> 可以是多个 或通配符，目标路径可以是容器内的绝对路径，或者工作目录（WORKDIR）的相对路径\nCOPY package.json /usr/src/app/\n')])])])]),e._v(" "),r("li",[r("p",[e._v("WORKDIR 指定工作目录")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("使用 WORKDIR 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("如果需要改变以后各层的工作目录的位置，使用 WORKDIR 指令。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("不要把Dockerfile 当成 Shell 脚本来书写!!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('每一个 RUN 都是启动一个容器、执行命令、然后提交存储层文件变更\nRUN cd /app\nRUN echo "hello" > world.txt\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("并不会在/app/world.txt修改hello，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 Dockerfile 中，这两行 RUN 命令的执行环境根本不同，是两个完全不同的容器\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("ADD 更高级的复制文件")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("ADD 指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。,仅在需要自动解压缩的场合使用 ADD")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("CMD 容器启动命令 用于指定默认的容器主进程的启动命令的")]),e._v(" "),r("ul",[r("li",[e._v("shell 格式：CMD <命令>")]),e._v(" "),r("li",[e._v('exec 格式：CMD ["可执行文件", "参数1", "参数2"...]')])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('CMD ["npm","start"]\nCMD npm install\n')])])]),r("p",[r("strong",[e._v("CMD和RUN 区别")]),e._v("\nRUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令。")])]),e._v(" "),r("li",[r("p",[e._v("ENV 设置环境变量")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    - ENV <key> <value>\n    - ENV <key1>=<value1> <key2>=<value2>...\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("EXPOSE 声明运行时容器提供服务端口。")]),e._v(" "),r("blockquote",[r("p",[e._v("只是"),r("strong",[e._v("声明")]),e._v("，运行时并不会因为这个声明应用就会开启这个端口服务。1帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；2运行时使用随机端口映射时，会自动随机映射EXPOSE的端口(docker run -p)")])]),e._v(" "),r("p",[r("strong",[e._v("EXPOSE和-p 宿主端口:容器端口 区别")]),e._v(" -p是映射宿主端口和容器端口，EXPOSE仅仅是声明容器打算使用什么端口，并不会自动在宿主端口映射。")])]),e._v(" "),r("li",[r("p",[e._v("USER 指定当前用户")])]),e._v(" "),r("li",[r("p",[e._v("HEALTHCHECK 健康检查")])]),e._v(" "),r("li",[r("p",[e._v("ARG 构建参数")])]),e._v(" "),r("li",[r("p",[e._v('ONBUILD <其它指令> 不会构建当前镜像，只有被当成"父类"去苟江下一级镜像时才会执行。')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('```\nENV NODE_VERSION 7.2.0\n\nRUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \\\n  && ...\n```\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#该 image 文件继承官方的 node image。\nFROM node:12\n#将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录\nCOPY . /app\n#指定接下来的工作路径为/app\nWORKDIR /app\n#在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件\nRUN npm install --registry=https://registry.npm.taobao.org\n#将容器 3000 端口暴露出来\nEXPOSE 3000\nCMD node demos/01.js\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('#设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像\n#该镜像继承与官方的node image\n\nFROM index.tenxcloud.com/docker_library/alpine:edge\n\n#Install nodejs\nRUN echo \'@edge http://nl.alpinelinux.org/alpine/edge/main\' >> /etc/apk/repositories\nRUN apk update\nRUN apk add --no-cache nodejs-lts@edge\n\n#创建你的工作文件夹+应用程序文件夹\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\n\n#安装依赖\nCOPY  package.json /usr/src/app\nRUN npm config set registry https://registry.npm.taobao.org\nRUN npm install\n\n#编译运行node项目\nCOPY  . /usr/src/app\n\n#暴露容器端口\nEXPOSE 8081\nCMD ["npm","start"]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"架构演变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构演变","aria-hidden":"true"}},[this._v("#")]),this._v(" 架构演变")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("1. 传统MVC \n2. 通过 **依赖注入**（Dependency Injection，简称DI）实现 控制反转(Inversion of Control)IOC M自动注入C\n3. 把servers分布到各个docker容器里面去,本来是你自己项目里面自己的某个服务，放到容器里面去后，就是谁都可以用的对外服务\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("RPC(Remote Procedure Calls)远程过程调用")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("RabbitMQ 实现RPC(message queue)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("node微服务框架seneca:向外暴露规则，一问一答的形式")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"微服务注册发现集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务注册发现集群搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 微服务注册发现集群搭建")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("成百上千的微服务而且还要动态伸缩，如果以人工写port host的硬编码方式肯定不行，\n微服务应该做到ip和port自动分配，减少人工干预，我们需要每个服务能动态的创建地址，而且调用方要能感知地址变化。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"//pic1.58cdn.com.cn/nowater/cxnomark/n_v2a32aaf284f0c4ef5a678a97c2aa3e8b2.png",alt:"image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-8cb338cd8923fa0e6857f45facc8f00f_hd.jpg",alt:"image"}})])}],!1,null,null,null);s.options.__file="同学，你的Docker掉了.md";t.default=s.exports}}]);