var feed = 'https://www.npr.org/rss/rss.php?id=1001';
var feed1 = 'http://feeds.bbci.co.uk/news/rss.xml';
var feed2 = 'http://rss.cnn.com/rss/cnn_topstories.rss';

$('#feed').yrss(feed, {
    ssl: false,
    limit: 5,
    reverse: false,
    cache: true,
    maxage: 3600,
    showerror: true,
    errormsg: '',
    tags: true,
    date: true,
    dateformat: 'spellmonth',
    titletag: 'h4',
    content: true,
    image: true,
    snippet: false,
    snippetlimit: 120,
    linktarget: '_blank',
    logging: true
});

$('#feed').yrss(feed1, {
    ssl: false,
    limit: 5,
    reverse: false,
    cache: true,
    maxage: 3600,
    showerror: true,
    errormsg: '',
    tags: true,
    date: true,
    dateformat: 'spellmonth',
    titletag: 'h3',
    content: true,
    image: true,
    snippet: false,
    snippetlimit: 120,
    linktarget: '_blank',
    logging: true
});

$('#feed').yrss(feed2, {
    ssl: false,
    limit: 5,
    reverse: false,
    cache: true,
    maxage: 3600,
    showerror: true,
    errormsg: '',
    tags: true,
    date: true,
    dateformat: 'spellmonth',
    titletag: 'h4',
    content: true,
    image: true,
    snippet: false,
    snippetlimit: 120,
    linktarget: '_blank',
    logging: true
});
