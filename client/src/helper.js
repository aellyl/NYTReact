import axios from 'axios';

var basequeryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ef06dd69c46f42aa83623955192d3007";

var helper={
    getNytArticles: function(topic, startYear,endYear){
        var queryURL;
        if (startYear)//if startYear is empty or null will evaluate to false
            {
              var beginDate=parseInt(startYear+"0101");
              
              queryURL= basequeryURL+"&q="+topic+"&begin_date="+beginDate;
            }
            else if(endYear)
            {
              var endDate=parseInt(endYear+"1231");
              
              queryURL= basequeryURL+"&q="+topic+"&end_date="+endDate;
            }
            else if(startYear && endYear)
            {
              var beginDate=parseInt(startYear+"0101");
              var endDate=parseInt(endYear+"1231");
              
              queryURL= basequeryURL+"&q="+topic+"&begin_date="+beginDate+"&end_date="+endDate;
      
            }else
            {
              queryURL= basequeryURL+"&q="+topic;
            };
            //console.log("current query: "+ queryURL);
        return axios.get(queryURL).then(res=>{
            if(res.data.response.docs[0])
            {
                return res.data.response.docs.slice(0,5);
            }

            return "";
        });

    },

    getSavedArticles: function()
    {

    },

    saveAnArticle: function(article)
    {
        console.log("in save aritcle helper");
        console.log(article);
        return axios.post("/api/saved",{article:article})
    },

    deleteSavedArticle: function()
    {

    }
}

export default helper;