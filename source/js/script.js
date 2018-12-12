(function($) {
    // Search
    var $searchWrap = $('#search-form-wrap'),
        isSearchAnim = false,
        searchAnimDuration = 200;
    var startSearchAnim = function() {
        isSearchAnim = true;
    };
    var stopSearchAnim = function(callback) {
        setTimeout(function() {
            isSearchAnim = false;
            callback && callback();
        }, searchAnimDuration);
    };
    $('#nav-search-btn').on('click', function() {
        if (isSearchAnim) return;
        startSearchAnim();
        $searchWrap.addClass('on');
        stopSearchAnim(function() {
            $('.search-form-input').focus();
        });
    });
    $('.search-form-input').on('blur', function() {
        startSearchAnim();
        $searchWrap.removeClass('on');
        stopSearchAnim();
    });
    // Share
    /*
    $('body').on('click', function() {
        $('.article-share-box.on').removeClass('on');
    }).on('click', '.article-share-link', function(e) {
        e.stopPropagation();
        var $this = $(this),
            url = $this.attr('data-url'),
            encodedUrl = encodeURIComponent(url),
            id = 'article-share-box-' + $this.attr('data-id'),
            offset = $this.offset();
        if ($('#' + id).length) {
            var box = $('#' + id);
            if (box.hasClass('on')) {
                box.removeClass('on');
                return;
            }
        } else {
            var html = ['<div id="' + id + '" class="article-share-box">', '<input class="article-share-input" value="' + url + '">', '<div class="article-share-links">', '<a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=' + encodedUrl + '" class="article-share-tieba" target="_blank" title="百度贴吧"></a>', '<a href="http://service.weibo.com/share/share.php?url=' + encodedUrl + '" class="article-share-weibo" target="_blank" title="新浪微博"></a>', '<a href="http://share.v.t.qq.com/index.php?c=share&a=index&url=' + encodedUrl + '" class="article-share-tqq" target="_blank" title="腾讯微博"></a>', '<a href="http://widget.renren.com/dialog/share?resourceUrl=' + encodedUrl + '" class="article-share-renren" target="_blank" title="人人"></a>', '</div>', '</div>'].join('');
            var box = $(html);
            $('body').append(box);
        }
        $('.article-share-box.on').hide();
        box.css({
            top: offset.top + 25,
            left: offset.left
        }).addClass('on');
    }).on('click', '.article-share-box', function(e) {
        e.stopPropagation();
    }).on('click', '.article-share-box-input', function() {
        $(this).select();
    }).on('click', '.article-share-box-link', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
    });*/
    // Caption
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if ($(this).parent().hasClass('fancybox')) return;
            var alt = this.alt;
            if (alt) $(this).after('<span class="caption">' + alt + '</span>');
            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function() {
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox();
    }
    // Mobile nav
    var $container = $('#container'),
        isMobileNavAnim = false,
        mobileNavAnimDuration = 200;
    var startMobileNavAnim = function() {
        isMobileNavAnim = true;
    };
    var stopMobileNavAnim = function() {
        setTimeout(function() {
            isMobileNavAnim = false;
        }, mobileNavAnimDuration);
    }
    $('#main-nav-toggle').on('click', function() {
        if (isMobileNavAnim) return;
        startMobileNavAnim();
        $container.toggleClass('mobile-nav-on');
        stopMobileNavAnim();
    });
    $('#wrap').on('click', function() {
        if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;
        $container.removeClass('mobile-nav-on');
    });
    // link
    var $linkUl = $('#link-list');
    var $list = $('#link-list li');
    $linkUl.empty();
    var count = $list.length;
    for (var i = 0; i < count; i++) {
        var ran = Math.floor(Math.random() * $list.length);
        $linkUl.append($list.eq(ran));
        $list.splice(ran, 1);
    }
    /**
     * Wrap images with fancybox support.
     */
    var wrapImageWithFancyBox = function() {
        $('.site-content img').not('[hidden]').not('.group-picture img, .post-gallery img').each(function() {
            var $image = $(this);
            var imageTitle = $image.attr('title');
            var $imageWrapLink = $image.parent('a');
            if ($imageWrapLink.length < 1) {
                var imageLink = $image.attr('data-original') ? this.getAttribute('data-original') : this.getAttribute('src');
                $imageWrapLink = $image.wrap('<a data-fancybox="group" href="' + imageLink + '"></a>').parent('a');
            }
            $imageWrapLink.addClass('fancybox fancybox.image');
            $imageWrapLink.attr('rel', 'group');
            if (imageTitle) {
                $imageWrapLink.append('<p class="image-caption">' + imageTitle + '</p>');
                //make sure img title tag will show correctly in fancybox
                $imageWrapLink.attr('title', imageTitle);
            }
        });
        $('.fancybox').fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }
    wrapImageWithFancyBox();
})(jQuery);
