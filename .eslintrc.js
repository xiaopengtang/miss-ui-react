module.exports = {
	"root" : true
	,"parser" : "babel-eslint"
    ,"extends": ["eslint:all", "plugin:react/all"]
	,"parserOptions": {
	    "sourceType": "module"
        ,"ecmaFeatures" : {
            "jsx" : true
        }
	}
	,"env": {
	    "browser": true
        ,"node": true
        ,"es6": true
	}
    ,"plugins" : ["react","html","es6-recommended"]
	,"extends": "standard"
	,"rules" : {
		"arrow-parens" : 0
		,"indent" : [2,4]
		,"no-undef" : 1
		,"generator-star-spacing" : 0
		,"no-debugger" : process.env.NODE_ENV === 'production' ? 2 : 0
		,"no-tabs" : "off"
		,"jsx-quotes": 1
        ,"react/jsx-no-undef": 1
        ,"react/jsx-uses-react": 1
        ,"react/jsx-uses-vars": 1
	}
}
