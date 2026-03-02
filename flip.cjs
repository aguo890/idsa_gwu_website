const fs = require('fs');
const path = require('path');

const walk = (d) => {
    let list = [];
    fs.readdirSync(d).forEach(f => {
        let p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) list.push(...walk(p));
        else if (p.endsWith('.tsx')) list.push(p);
    });
    return list;
};

// We will swap colors. 
// text-black -> text-white
// bg-white -> bg-black
// border-black -> border-white
// shadow-[...rgba(0,0,0,1)] -> shadow-[...rgba(255,255,255,1)]
// hover:bg-black -> hover:bg-white
// hover:text-white -> hover:text-black
// bg-gray-100 -> bg-neutral-900

walk('./src').forEach(f => {
    let c = fs.readFileSync(f, 'utf8');

    // Create temporary tokens for the swap
    c = c.replace(/text-black/g, '__TEXT_WHITE__');
    c = c.replace(/text-white/g, '__TEXT_BLACK__');

    c = c.replace(/bg-white/g, '__BG_BLACK__');
    c = c.replace(/bg-black/g, '__BG_WHITE__');

    c = c.replace(/border-black/g, '__BORDER_WHITE__');
    c = c.replace(/border-white/g, '__BORDER_BLACK__');

    c = c.replace(/hover:bg-black/g, '__HOVER_BG_WHITE__');
    c = c.replace(/hover:bg-white/g, '__HOVER_BG_BLACK__');

    c = c.replace(/hover:text-white/g, '__HOVER_TEXT_BLACK__');
    c = c.replace(/hover:text-black/g, '__HOVER_TEXT_WHITE__');

    c = c.replace(/bg-gray-100/g, 'bg-neutral-900');

    // Shadows
    c = c.replace(/rgba\(0,0,0,1\)/g, '__RGBA_WHITE__');
    c = c.replace(/rgba\(255,255,255,1\)/g, '__RGBA_BLACK__');
    c = c.replace(/rgba\(0,0,0,0\.1\)/g, '__RGBA_WHITE_TRANSPARENT__');

    // Resolve tokens
    c = c.replace(/__TEXT_WHITE__/g, 'text-white');
    // For original text-white, we want them to stay as they were flipped to text-black but user wants ALL text on the lighter side. Wait, if it was text-white before my first script, it should probably be text-white now. But my first script turned them to text-black. So everything is text-black now. Thus, the swap will make them text-white, which is correct. If any text-white leaked, it will become text-black, which might be wrong because the user wants ALL text lighter.
    c = c.replace(/__TEXT_BLACK__/g, 'text-black');

    c = c.replace(/__BG_BLACK__/g, 'bg-black');
    c = c.replace(/__BG_WHITE__/g, 'bg-white');

    c = c.replace(/__BORDER_WHITE__/g, 'border-white');
    c = c.replace(/__BORDER_BLACK__/g, 'border-black');

    c = c.replace(/__HOVER_BG_WHITE__/g, 'hover:bg-white');
    c = c.replace(/__HOVER_BG_BLACK__/g, 'hover:bg-black');

    c = c.replace(/__HOVER_TEXT_BLACK__/g, 'hover:text-black');
    c = c.replace(/__HOVER_TEXT_WHITE__/g, 'hover:text-white');

    // Shadows resolve
    c = c.replace(/__RGBA_WHITE__/g, 'rgba(255,255,255,1)');
    c = c.replace(/__RGBA_BLACK__/g, 'rgba(0,0,0,1)');
    c = c.replace(/__RGBA_WHITE_TRANSPARENT__/g, 'rgba(255,255,255,0.1)');

    fs.writeFileSync(f, c);
});
console.log('Swap script executed');
