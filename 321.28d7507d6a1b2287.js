"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[321],{1321:(F,a,s)=>{s.r(a),s.d(a,{PriceListModule:()=>O});var d=s(177),l=s(4341),u=s(303),e=s(540),m=s(1626);let g=(()=>{class i{constructor(t){this.http=t,this.API="https://your-api-url.com"}downloadPriceList(t){return this.http.get(`${this.API}/price-list/${t}/download`,{responseType:"blob"})}downloadFullPriceList(){return this.http.get(`${this.API}/price-list/full/download`,{responseType:"blob"})}static{this.\u0275fac=function(n){return new(n||i)(e.KVO(m.Qq))}}static{this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();const h=["serviceItem"];function f(i,r){if(1&i&&(e.j41(0,"option",15),e.EFF(1),e.k0s()),2&i){const t=r.$implicit,n=e.XpG(2);e.Y8G("value",t)("selected",n.selectedSpecialist===t),e.R7$(1),e.SpI(" ",t," ")}}function v(i,r){if(1&i){const t=e.RV6();e.j41(0,"div",12)(1,"select",13),e.bIt("change",function(c){e.eBV(t);const o=e.XpG();return e.Njj(o.onSelectSpecialistFromDropdown(c))}),e.DNE(2,f,2,3,"option",14),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(2),e.Y8G("ngForOf",t.specialists)}}function x(i,r){if(1&i){const t=e.RV6();e.j41(0,"li",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,p=e.XpG(2);return e.Njj(p.onSelectSpecialistFromList(o))}),e.EFF(1),e.k0s()}if(2&i){const t=r.$implicit,n=e.XpG(2);e.AVh("selected",n.selectedSpecialist===t),e.R7$(1),e.SpI(" ",t," ")}}function P(i,r){if(1&i&&(e.j41(0,"ul"),e.DNE(1,x,2,3,"li",16),e.k0s()),2&i){const t=e.XpG();e.R7$(1),e.Y8G("ngForOf",t.specialists)}}function _(i,r){if(1&i&&(e.j41(0,"div",18,19)(2,"div",20),e.EFF(3),e.k0s(),e.nrm(4,"div",21),e.j41(5,"div",22),e.EFF(6),e.k0s()()),2&i){const t=r.$implicit;e.R7$(3),e.JRh(t.name),e.R7$(3),e.JRh(t.price)}}const C=[{path:"",component:(()=>{class i{constructor(t){this.priceListService=t,this.specialists=["\u041f\u0435\u0434\u0438\u0430\u0442\u0440","\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433","\u0413\u0430\u0441\u0442\u0440\u043e\u044d\u043d\u0442\u0435\u0440\u043e\u043b\u043e\u0433","\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0430\u043b\u043b\u0435\u0440\u0433\u043e\u043b\u043e\u0433-\u0438\u043c\u043c\u0443\u043d\u043e\u043b\u043e\u0433","\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043d\u0435\u0444\u0440\u043e\u043b\u043e\u0433","\u042d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433","\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433","\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433-\u043f\u0441\u0438\u0445\u043e\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442","\u041d\u0435\u043e\u043d\u0430\u0442\u043e\u043b\u043e\u0433","\u041b\u043e\u0433\u043e\u043f\u0435\u0434-\u0434\u0435\u0444\u0435\u043a\u0442\u043e\u043b\u043e\u0433, \u043d\u0435\u0439\u0440\u043e\u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433","\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b"],this.selectedSpecialist=null,this.isMobile=!1,this.services={\u041f\u0435\u0434\u0438\u0430\u0442\u0440:[{name:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",price:1500},{name:"\u041f\u0440\u0438\u0432\u0438\u0432\u043a\u0430",price:500},{name:"\u041e\u0431\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u0430\u043b\u043b\u0435\u0440\u0433\u0438\u0438",price:1200},{name:"\u0421\u043a\u0440\u0438\u043d\u0438\u043d\u0433 \u043d\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f",price:1800},{name:"\u0412\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0442 \u0433\u0440\u0438\u043f\u043f\u0430",price:700}],\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433:[{name:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",price:2e3},{name:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0446\u0435\u0444\u0430\u043b\u043e\u0433\u0440\u0430\u0444\u0438\u044f",price:1e3},{name:"\u041c\u0420\u0422 \u0433\u043e\u043b\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u043e\u0437\u0433\u0430",price:3e3},{name:"\u041a\u0422 \u0433\u043e\u043b\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u043e\u0437\u0433\u0430",price:2500},{name:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u043e\u0431\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435",price:6e3},{name:"\u041d\u0435\u0432\u0440\u043e\u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435",price:1800},{name:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044e \u0433\u043e\u043b\u043e\u0432\u043d\u044b\u0445 \u0431\u043e\u043b\u0435\u0439",price:1200},{name:"\u0423\u0417\u0418 \u0441\u043e\u0441\u0443\u0434\u043e\u0432 \u0433\u043e\u043b\u043e\u0432\u044b",price:1500},{name:"\u041b\u0435\u0447\u0435\u043d\u0438\u0435 \u0438 \u0442\u0435\u0440\u0430\u043f\u0438\u044f (\u043a\u0443\u0440\u0441)",price:5e3},{name:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430",price:4e3}]}}ngOnInit(){this.selectedSpecialist=this.specialists[0],this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize.bind(this))}ngOnDestroy(){window.removeEventListener("resize",this.checkScreenSize.bind(this))}ngAfterViewInit(){this.serviceItems.forEach(t=>{const n=t.nativeElement.querySelector(".service-name"),c=t.nativeElement.querySelector(".service-price"),o=t.nativeElement.querySelector(".service-divider");n&&c&&o&&(o.style.width=t.nativeElement.offsetWidth-(n.offsetWidth+c.offsetWidth+20)+"px")})}checkScreenSize(){this.isMobile=window.innerWidth<=450}onSelectSpecialistFromList(t){this.selectedSpecialist=t,console.log("Selected specialist:",this.selectedSpecialist)}onSelectSpecialistFromDropdown(t){this.selectedSpecialist=t.target.value,console.log("Selected specialist:",this.selectedSpecialist)}getSelectedServices(){return this.services[this.selectedSpecialist]||[]}downloadPriceList(t){this.priceListService.downloadPriceList(t).subscribe(n=>{const c=window.URL.createObjectURL(n),o=document.createElement("a");o.href=c,o.download=`\u041f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442_${t}.pdf`,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(c)})}downloadFullPriceList(){this.priceListService.downloadFullPriceList().subscribe(t=>{const n=window.URL.createObjectURL(t),c=document.createElement("a");c.href=n,c.download="\u041f\u043e\u043b\u043d\u044b\u0439_\u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442.pdf",document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(n)})}static{this.\u0275fac=function(n){return new(n||i)(e.rXU(g))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-price-list"]],viewQuery:function(n,c){if(1&n&&e.GBs(h,5),2&n){let o;e.mGM(o=e.lsd())&&(c.serviceItems=o)}},decls:16,vars:3,consts:[[1,"page-background"],[1,"title"],[1,"main"],[1,"choice-menu"],["class","dropdown",4,"ngIf"],[4,"ngIf"],[1,"main-service"],[1,"services"],["class","service-item",4,"ngFor","ngForOf"],[1,"dowload"],[1,"dow-left",3,"click"],[1,"dow-right",3,"click"],[1,"dropdown"],[3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"],["class","menu-item",3,"selected","click",4,"ngFor","ngForOf"],[1,"menu-item",3,"click"],[1,"service-item"],["serviceItem",""],[1,"service-name"],[1,"service-divider"],[1,"service-price"]],template:function(n,c){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h2"),e.EFF(3,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f / \u041f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442"),e.k0s()(),e.j41(4,"div",2)(5,"div",3),e.DNE(6,v,3,1,"div",4),e.DNE(7,P,2,1,"ul",5),e.k0s(),e.j41(8,"div",6)(9,"div",7),e.DNE(10,_,7,2,"div",8),e.k0s()(),e.j41(11,"div",9)(12,"p",10),e.bIt("click",function(){return c.downloadPriceList(c.selectedSpecialist)}),e.EFF(13,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442"),e.k0s(),e.j41(14,"p",11),e.bIt("click",function(){return c.downloadFullPriceList()}),e.EFF(15,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442"),e.k0s()()()()),2&n&&(e.R7$(6),e.Y8G("ngIf",c.isMobile),e.R7$(1),e.Y8G("ngIf",!c.isMobile),e.R7$(3),e.Y8G("ngForOf",c.getSelectedServices()))},dependencies:[d.Sq,d.bT,l.xH,l.y7],styles:['@charset "UTF-8";.title[_ngcontent-%COMP%]{margin-left:10.5%;margin-top:25px}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:12px;line-height:14.63px}.main[_ngcontent-%COMP%]{margin-left:10.5%;margin-right:10.5%;margin-bottom:50px}.choice-menu[_ngcontent-%COMP%]{border-bottom:1px solid #ADADAD;max-width:100%;margin-top:50px;text-align:center}.choice-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{cursor:pointer;border:none;margin:5px;padding:5px 10px;list-style-type:none;display:inline-block;text-align:center;white-space:nowrap;font-size:14px}.choice-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.choice-menu[_ngcontent-%COMP%]   .menu-item.selected[_ngcontent-%COMP%]{font-weight:700}.choice-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:15px;border-radius:8px;border:1px solid rgb(126,179,193)}.choice-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:15px}.main-service[_ngcontent-%COMP%]{width:100%;border-radius:8px;box-shadow:2px 0 5px #00000003,-2px 0 5px #00000003,0 -5px 10px #0000001a,0 5px 10px #0000001a}.services[_ngcontent-%COMP%]{padding:30px 5%;margin-top:50px;font-size:15px}.service-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:12px 0;position:relative;text-align:center}.service-name[_ngcontent-%COMP%]{flex:0 0 auto;text-align:left;padding-right:10px}.service-divider[_ngcontent-%COMP%]{flex:1;border-bottom:1px solid #ccc;margin-top:13px;margin-left:30px;margin-right:auto}.service-price[_ngcontent-%COMP%]{width:80px;flex:0 0 auto;text-align:right;padding-left:10px}.dowload[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}.dowload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;padding-top:5px;color:#000;border-bottom:1px solid black;cursor:pointer}.dowload[_ngcontent-%COMP%]   .dow-left[_ngcontent-%COMP%]{margin-right:25px}@media (max-width: 800px){.main[_ngcontent-%COMP%]{margin-left:5.5%;margin-right:5.5%}.services[_ngcontent-%COMP%]{padding:10px 3%;font-size:13px}.service-divider[_ngcontent-%COMP%]{margin-left:10px}.service-price[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 650px){.dowload[_ngcontent-%COMP%]{justify-content:space-between}.dowload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px}.dow-left[_ngcontent-%COMP%]{margin-right:0}}@media (max-width: 550px){.main[_ngcontent-%COMP%]{margin-left:3.5%;margin-right:3.5%}.services[_ngcontent-%COMP%]{padding:10px 3%;font-size:11px}.service-item[_ngcontent-%COMP%]{justify-content:space-between}.service-name[_ngcontent-%COMP%]{flex:1;text-align:left;padding-right:0}.service-divider[_ngcontent-%COMP%]{display:none}.service-price[_ngcontent-%COMP%]{flex:1;text-align:right;padding-left:0;width:auto}}']})}}return i})()}];let w=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[u.iI.forChild(C),u.iI]})}}return i})(),O=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[d.MD,w,l.YN,l.X1]})}}return i})()}}]);