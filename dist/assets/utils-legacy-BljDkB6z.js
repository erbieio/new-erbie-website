System.register([],(function(e,t){"use strict";return{execute:function(){e("t",(function(e){if(e){var a=e.trim();if("0x"===a)return"Transfer";var n="0x"===a.substr(0,2).toLowerCase()?a.substr(2):a,r=n.length;if(r%2!=0)return"";for(var m=0,y=[],i=0;i<r;i+=2)m=parseInt(n.substr(i,2),16),y.push(String.fromCharCode(m));var s=y.join("");if("erbie"!==s.substring(0,s.indexOf(":")))return"Contract Based Transaction";var p=JSON.parse(s.substring(6));return t.forEach((function(e){p.type===e.type&&(p.name=e.name)})),p.name}}));var t=[{type:0,name:"Mint NFT"},{type:1,name:"Transfer NFT"},{type:2,name:"Authorize NFT"},{type:3,name:"Cancel NFT Authorization"},{type:4,name:"Authorize All NFTs"},{type:5,name:"Cancel All NFT Authorization"},{type:6,name:"Exchange SNFTs"},{type:7,name:"Stake SNFTs"},{type:8,name:"Redeem SNFTs"},{type:9,name:"Stake ERB"},{type:10,name:"Redeem ERB"},{type:11,name:"Stake ERB (Stakers)"},{type:12,name:"Become an Validator"},{type:13,name:"None"},{type:14,name:"Sell SNFTs"},{type:15,name:"Buy SNFTs"},{type:16,name:"Buy Unminted NFTs"},{type:17,name:"Sell Unminted NFTs"},{type:18,name:"Trade SNFTs"},{type:19,name:"Trade Unminted NFTs"},{type:20,name:"Trade Unauthorized SNFTs"},{type:21,name:"Increase Stake"},{type:22,name:"Redeem Stake"},{type:23,name:"Nominate SNFTs"},{type:24,name:"Nominate SNFTs(Proxy)"},{type:25,name:"Change SNFT beneficiary"},{type:26,name:"Restore Validator Weight"},{type:27,name:"Bulk trading SNFTs"},{type:28,name:"Buy or Sell By Force"},{type:29,name:"Extract ERB"},{type:31,name:"Validator Delegation"}]}}}));
