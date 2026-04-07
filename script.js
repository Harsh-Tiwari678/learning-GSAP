import gsap from "gsap";
// gspa core and pluggins are different modules, so wen need to tell the GSAP core that we need to use this pluggin
// done by  - gsap.registerPlugin(scrollTrigger);
import {ScrollTrigger} from "gsap/src/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
gsap.registerPlugin(ScrollTrigger , SplitText);