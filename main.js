var ai = function(input) {
    return input.replace("你", "_ch_you")
                .replace("我", "_ch_me")
                .replace("_ch_you", "我")
                .replace("_ch_me", "你")
                .replace("you", "_en_you") //支持英文
                .replace("You", "_en_you")
                .replace("I", "_en_me")
                .replace("i", "_en_me")
                .replace("_en_you", "I")
                .replace("_en_me", "You")
                .replace("真係", "就係") //支持粤语
                .replace("ですか", "ですよ") //支持日文
                .replace("?", "!")
                .replace("？", "!")
                .replace("吧", "")
                .replace("吗", "")
                .replace("咩", "")
}