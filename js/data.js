/* ── Products Data ── */
const products = [
  {id:24, name:'S-10 Airpods',           cat:'Bluetooth',      price:1290, old:null, badge:'NEW',  desc:'S-10 Airpods',                              rating:5, color:'#FF3B00', featured:false, img:'photos/b1.png'},
  {id:25, name:'S-9 Bluetooth Earphones',cat:'Bluetooth',      price:1000, old:null, badge:'',     desc:'S-9 Bluetooth Earphones',                   rating:4, color:'#FF3B00', featured:false, img:'photos/b2.png'},
  {id:30, name:'3 in 1 Cable',            cat:'Cables', price:350, old:null, badge:'',    desc:'3-in-1 connector · Type-C + Lightning + Micro USB', rating:5, color:'#0066FF', featured:false, img:'cables/c1.png'},
  {id:31, name:'3500 Data Cable (V8)',    cat:'Cables', price:200, old:null, badge:'',    desc:'V8 Micro USB · Fast data transfer · Durable build',  rating:4, color:'#0066FF', featured:false, img:'cables/c2.png'},
  {id:32, name:'4 in 1 Cable',           cat:'Cables', price:450, old:null, badge:'NEW', desc:'4-in-1 multi connector · Universal compatibility',   rating:5, color:'#0066FF', featured:false, img:'cables/c3.png'},
  {id:33, name:'6 Amp. Type C Cable',    cat:'Cables', price:375, old:null, badge:'HOT', desc:'6A super fast charging · Type-C · Heavy duty',       rating:5, color:'#0066FF', featured:false, img:'cables/c4.png'},
  {id:34, name:'Aux Cable',              cat:'Cables', price:250, old:null, badge:'',    desc:'3.5mm stereo audio · Braided · 1m length',           rating:4, color:'#0066FF', featured:false, img:'cables/c5.png'},
  {id:35, name:'C to C Data Cable',      cat:'Cables', price:380, old:null, badge:'',    desc:'Type-C to Type-C · Fast charge · Data sync',         rating:4, color:'#0066FF', featured:false, img:'cables/c6.png'},
  {id:36, name:'Fancy iPhone Cable',     cat:'Cables', price:250, old:null, badge:'NEW', desc:'Lightning connector · Stylish braided · Fast charge', rating:4, color:'#0066FF', featured:false, img:'cables/c7.png'},
  {id:37, name:'iPhone Data Cable',      cat:'Cables', price:250, old:null, badge:'',    desc:'Lightning · MFi compatible · 1m · Fast charge',      rating:4, color:'#0066FF', featured:false, img:'cables/c8.png'},
  {id:38, name:'Magic Cable',            cat:'Cables', price:70,  old:null, badge:'',    desc:'Budget-friendly · Micro USB · Reliable charging',    rating:4, color:'#0066FF', featured:false, img:'cables/c9.png'},
  {id:39, name:'OTG 3500 Cable (V8)',    cat:'Cables', price:120, old:null, badge:'',    desc:'OTG V8 Micro USB · Data transfer · Plug & play',     rating:4, color:'#0066FF', featured:false, img:'cables/c10.png'},
  {id:40, name:'OTG Type-C Cable',       cat:'Cables', price:150, old:null, badge:'',    desc:'OTG Type-C · Fast data · Universal support',         rating:4, color:'#0066FF', featured:false, img:'cables/c11.png'},
  {id:41, name:'Power Bank Cable (V8)',  cat:'Cables', price:80,  old:null, badge:'',    desc:'V8 Micro USB · Compact · Power bank compatible',     rating:4, color:'#0066FF', featured:false, img:'cables/c12.png'},
  {id:42, name:'Type-C Power Bank Cable',cat:'Cables', price:85,  old:null, badge:'',    desc:'Type-C · Compact · Power bank compatible',           rating:4, color:'#0066FF', featured:false, img:'cables/c13.png'},
  {id:43, name:'USB Type-C Cable',       cat:'Cables', price:250, old:null, badge:'',    desc:'USB to Type-C · Fast charge · Durable design',       rating:4, color:'#0066FF', featured:false, img:'cables/c14.png'},
  {id:44, name:'12W Dual Port USB Charger',            cat:'Chargers', price:430, old:null, badge:'',    desc:'Dual USB port · 12W · Compact wall adapter',          rating:4, color:'#FFB800', featured:false, img:'chargers/ch1.png'},
  {id:45, name:'38W PD USB Car Charger',               cat:'Chargers', price:700, old:null, badge:'HOT', desc:'38W Power Delivery · USB car charger · Fast charge',   rating:5, color:'#FFB800', featured:false, img:'chargers/ch2.png'},
  {id:46, name:'65W Single Port Adapter with Type-C',  cat:'Chargers', price:699, old:null, badge:'NEW', desc:'65W GaN adapter · Type-C cable included · Compact',    rating:5, color:'#FFB800', featured:false, img:'chargers/ch3.png'},
  {id:47, name:'65W Type C Charger',                   cat:'Chargers', price:900, old:null, badge:'HOT', desc:'65W single port · Type-C · Super fast charging',       rating:5, color:'#FFB800', featured:false, img:'chargers/ch4.png'},
  {id:48, name:'8W Single Port Micro USB Charger',     cat:'Chargers', price:200, old:null, badge:'',    desc:'8W single port · Micro USB · Lightweight adapter',     rating:4, color:'#FFB800', featured:false, img:'chargers/ch5.png'},
  {id:49, name:'Power Bank 10000MAH',    cat:'PowerBank',  price:1050, old:null, badge:'',     desc:'10000mAh · Compact · Fast charging',         rating:4, color:'#00BCD4', featured:false, img:'bankk/image.png'},
  {id:18, name:'Airpod Earphones',       cat:'WiredEarphones', price:320, old:499, badge:'NEW',  desc:'Braided cable · 3 ear tip sizes · Mic + volume', rating:5, color:'#FF3B00', featured:true,  img:'photos/wired1.png'},
  {id:19, name:'M-20 Earphones',         cat:'WiredEarphones', price:150, old:249, badge:'',     desc:'Matte finish · Soft silicone tips · Built-in mic', rating:4, color:'#FF3B00', featured:false, img:'photos/wired2.png'},
  {id:20, name:'MBHF-33 Earphones',      cat:'WiredEarphones', price:150, old:249, badge:'',     desc:'White finish · Lightweight · In-ear mic',          rating:4, color:'#CCCCCC', featured:false, img:'photos/wired3.png'},
  {id:21, name:'Metal Magnetic Earphones',cat:'WiredEarphones', price:400, old:599, badge:'HOT', desc:'Metal housing · Magnetic buds · Deep bass · Hi-Fi', rating:5, color:'#9E9E9E', featured:false, img:'photos/wired4.png'},
  {id:22, name:'Stereo Earphones',        cat:'WiredEarphones', price:120, old:199, badge:'NEW', desc:'Braided cable · Inline remote · 3.5mm jack · Deep bass', rating:4, color:'#FF3B00', featured:false, img:'photos/wired5.png'},
  {id:23, name:'Rainbow Earphones',       cat:'WiredEarphones', price:250, old:399, badge:'',    desc:'Stereo sound · Soft silicone tips · Built-in mic',      rating:4, color:'#1565C0', featured:false, img:'photos/wired6.png'},
];

function svgFor(key, c) {
  const s = {
    ep1: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <ellipse cx="40" cy="60" rx="16" ry="22" fill="#222" stroke="${c}66" stroke-width="1.5"/>
      <ellipse cx="40" cy="60" rx="9" ry="12" fill="${c}22" stroke="${c}99" stroke-width="1"/>
      <circle cx="40" cy="60" r="4" fill="${c}"/>
      <ellipse cx="80" cy="60" rx="16" ry="22" fill="#222" stroke="${c}66" stroke-width="1.5"/>
      <ellipse cx="80" cy="60" rx="9" ry="12" fill="${c}22" stroke="${c}99" stroke-width="1"/>
      <circle cx="80" cy="60" r="4" fill="${c}"/>
      <path d="M56 60 Q60 54 64 60" stroke="${c}44" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`,
    ep2: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M30 90 Q30 55 60 50 Q90 45 90 75" stroke="${c}44" stroke-width="2" fill="none"/>
      <circle cx="30" cy="92" r="13" fill="#222" stroke="${c}66" stroke-width="1.5"/>
      <circle cx="30" cy="92" r="7" fill="${c}22" stroke="${c}88" stroke-width="1"/>
      <circle cx="30" cy="92" r="3" fill="${c}"/>
      <circle cx="90" cy="75" r="13" fill="#222" stroke="${c}66" stroke-width="1.5"/>
      <circle cx="90" cy="75" r="7" fill="${c}22" stroke="${c}88" stroke-width="1"/>
      <circle cx="90" cy="75" r="3" fill="${c}"/>
    </svg>`,
    cable: `<svg width="80" height="120" viewBox="0 0 80 120" fill="none">
      <rect x="20" y="8" width="40" height="70" rx="8" fill="#1A1A1A" stroke="${c}55" stroke-width="1.5"/>
      <rect x="28" y="16" width="24" height="40" rx="4" fill="${c}18" stroke="${c}33" stroke-width="1"/>
      <rect x="31" y="60" width="18" height="5" rx="2.5" fill="${c}66"/>
      <rect x="34" y="80" width="12" height="30" rx="3" fill="#1A1A1A" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="36" y="109" width="8" height="7" rx="3" fill="#333"/>
      <circle cx="40" cy="35" r="7" fill="${c}33" stroke="${c}88" stroke-width="1"/>
      <path d="M37 35 L39 37 L43 31" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    charger: `<svg width="100" height="120" viewBox="0 0 100 120" fill="none">
      <rect x="15" y="20" width="70" height="50" rx="10" fill="#1A1A1A" stroke="${c}44" stroke-width="1.5"/>
      <rect x="22" y="28" width="26" height="14" rx="3" fill="${c}18" stroke="${c}33" stroke-width="1"/>
      <rect x="52" y="28" width="26" height="14" rx="3" fill="${c}18" stroke="${c}33" stroke-width="1"/>
      <rect x="22" y="48" width="56" height="13" rx="3" fill="${c}12" stroke="${c}22" stroke-width="1"/>
      <circle cx="50" cy="38" r="5" fill="${c}33" stroke="${c}88" stroke-width="1.5"/>
      <circle cx="50" cy="38" r="2.5" fill="${c}"/>
      <rect x="40" y="70" width="20" height="8" rx="2" fill="#222"/>
      <path d="M44 82 L44 105" stroke="rgba(255,255,255,0.12)" stroke-width="2" stroke-linecap="round"/>
      <path d="M56 82 L56 105" stroke="rgba(255,255,255,0.12)" stroke-width="2" stroke-linecap="round"/>
      <rect x="38" y="104" width="24" height="6" rx="3" fill="#222"/>
    </svg>`,
    case: `<svg width="80" height="120" viewBox="0 0 80 120" fill="none">
      <rect x="12" y="8" width="56" height="104" rx="12" fill="#1A1A1A" stroke="${c}44" stroke-width="1.5"/>
      <rect x="18" y="14" width="44" height="82" rx="8" fill="${c}0D" stroke="${c}22" stroke-width="1"/>
      <rect x="30" y="6" width="20" height="5" rx="2.5" fill="#222" stroke="${c}33" stroke-width="1"/>
      <circle cx="40" cy="108" r="4" fill="#222" stroke="${c}44" stroke-width="1"/>
      <rect x="22" y="30" width="36" height="3" rx="1.5" fill="${c}22"/>
    </svg>`,
    pb: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="25" width="70" height="50" rx="10" fill="#1A1A1A" stroke="${c}44" stroke-width="1.5"/>
      <rect x="80" y="38" width="10" height="24" rx="4" fill="#222" stroke="${c}33" stroke-width="1"/>
      <rect x="16" y="36" width="12" height="28" rx="4" fill="${c}22" stroke="${c}44" stroke-width="1"/>
      <rect x="32" y="36" width="12" height="28" rx="4" fill="${c}33" stroke="${c}55" stroke-width="1"/>
      <rect x="48" y="36" width="12" height="28" rx="4" fill="${c}22" stroke="${c}33" stroke-width="1"/>
      <rect x="64" y="42" width="10" height="16" rx="3" fill="#333"/>
      <circle cx="50" cy="10" r="4" fill="${c}"/>
    </svg>`,
  };
  return s[key] || s.ep1;
}

function cardHTML(p) {
  const badgeStyle = p.color === '#FFB800'
    ? `background:${p.color};color:#000`
    : `background:${p.color === '#FF3B00' ? 'var(--primary)' : p.color};color:#fff`;
  return `
    <div class="product-card" onclick="window.location='product.html?id=${p.id}'" style="cursor:pointer">
      <div class="product-img" style="background:#EEF2FA">
        <div class="product-img-bg" style="background:radial-gradient(circle,${p.color}33 0%,transparent 70%)"></div>
        ${p.badge ? `<div class="badge" style="${badgeStyle}">${p.badge}</div>` : ''}
        <div style="position:relative;z-index:1">${p.img ? `<img src="${p.img}" alt="${p.name}" style="width:220px;height:220px;object-fit:contain;display:block;margin:auto">` : svgFor(p.svg, p.color)}</div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <span class="currency">₹</span>${p.price.toLocaleString('en-IN')}
            ${p.old ? `<span class="old">₹${p.old.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`;
}
