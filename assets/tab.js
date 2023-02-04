$(function () {
    var $projectTab = $('.p-topics__navigation--green'),
        $featureTab = $('.p-topics__navigation--pink'),
        /**ここへデフォルトタブ追加時変数定義してこのコメントアウト削除
         * $DefaultTab = $(''),
         */
        $topicDefault = $('.topics-default'),
        $projectContents = $('.topics-project'),
        $featureContents = $('.topics-feature');

    $projectTab.on('click', function () {
        if ($projectContents.hasClass('is-active')) {
        } else {
            $topicDefault.removeClass('is-active');
            $featureContents.removeClass('is-active');
            $projectContents.addClass('is-active');
        }
    })
    $featureTab.on('click', function () {
        if ($featureContents.hasClass('is-active')) {
        } else {
            $topicDefault.removeClass('is-active');
            $projectContents.removeClass('is-active');
            $featureContents.addClass('is-active');
        }
    })
    /**デフォルトタブ追加時用
    $DefaultTab.on('click', function () {
        if ($topicDefault.hasClass('is-active')) {
        } else {
            $featureContents.removeClass('is-active');
            $projectContents.removeClass('is-active');
            $topicDefault.addClass('is-active');
        }
    })
    */
})