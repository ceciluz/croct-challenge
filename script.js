import croct from '@croct/plug';

croct.plug({
    appId: 'd37a2733-440d-4e6b-8f99-b0ba86ae2eb5'
});

croct.fetch('homepage-hero').then(({content}) => {
    const banner = document.getElementById('hero-banner');
    const title = banner.querySelector('h1');
    const subtitle = banner.querySelector('.subtitle');
    const cta = banner.querySelector('.cta');

    title.textContent = content.title;
    subtitle.textContent = content.subtitle;
    cta.textContent = content.cta.label;
    cta.href = content.cta.link;
});