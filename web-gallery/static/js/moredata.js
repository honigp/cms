var MoreDataHelper=Class.create();MoreDataHelper.prototype={initialize:function(B,C,A){this.opened=false;this.toggleMoreDataId=B;this.moreDataContainerId=C;this.showMorePostfix=A;if($(this.toggleMoreDataId)){Event.observe($(this.toggleMoreDataId),"click",function(D){Event.stop(D);this.toggleMoreData()
}.bind(this))}},toggleMoreData:function(){if(this.opened){new Effect.BlindUp($(this.moreDataContainerId));$(this.toggleMoreDataId).innerHTML=L10N.get("show.more."+this.showMorePostfix);$(this.toggleMoreDataId).removeClassName("less");this.opened=false}else{new Effect.BlindDown($(this.moreDataContainerId));
$(this.toggleMoreDataId).addClassName("less");$(this.toggleMoreDataId).innerHTML=L10N.get("show.less."+this.showMorePostfix);this.opened=true}}};