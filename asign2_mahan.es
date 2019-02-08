
#Question no 1

PUT information/_doc/1
{
"Text": "text",
"Keyword" : "1",
"Long" : "1111",
"Double" : "1.122222",
"Boolean" : "123",
"geo_point" : "192.168.1.1",
"Date": [
    "yyyy/MM/dd",
    "MM-dd-yyyy"
  ]
,"Integer Range" : "2 to 4",
"Array with text type values": "[water,flour,man,woman]"
,"Inner Object" :[
  "Text",
  "Short"
  ]
,"Nested object" :[
  "address",
  "email"
  ]

}

#Question no 2

PUT information1/_doc/2
{
"Text": "text",
"Keyword" : "1",
"Long" : "1111",
"Double" : "1.122222",
"Boolean" : "123",
"geo_point" : "192.168.1.1",
"Date": [
    "yyyy/MM/dd",
    "MM-dd-yyyy"
  ]
,"Integer Range" : "2 to 4",
"Array with text type values": "[water,flour,man,woman]"
,"Inner Object" :[
  "Text",
  "Short"
  ]
,"Nested object" :[
  "address",
  "email"
  ]

}

PUT information2/_doc/3
{
"Text": "text",
"Keyword" : "1",
"Long" : "1111",
"Double" : "1.122222",
"Boolean" : "123",
"geo_point" : "192.168.1.1",
"Date": [
    "yyyy/MM/dd",
    "MM-dd-yyyy"
  ]
,"Integer Range" : "2 to 4",
"Array with text type values": "[water,flour,man,woman]"
,"Inner Object" :[
  "Text",
  "Short"
  ]
,"Nested object" :[
  "address",
  "email"
  ]

}

#Question no 3 

POST information/_doc/1/_update
{
  "doc": {
    "Date": {
      "yyyy/MM/dd"": "2018-09-04",
      "MM-dd-yyyy": "2018-09-04"
    }
  }
}

#Question no 4

curl -H "Content_Type: accounts/json" _XPOST
#Question no 5 
http://localhost:9200/accounts/_doc/_search?q=*
GET /accounts/_doc/_search?q=*

http://localhost:9200/accounts/_doc/_search?q=age:[30%20TO%2070]
      GET /accounts/_doc/_search?q=age:[30 TO 70]
      
http://localhost:9200/accounts/_doc/_search?q=gender:F%20AND%20age:[*%20TO%2025]
GET /accounts/_doc/_search?q=gender:F AND age:[* TO 25]

http://localhost:9200/accounts/_doc/_search?q=gender:M%20and%20state=ME
GET /accounts/_doc/_search?q=gender:M AND state:ME

#Question no 6 

POST /accounts/_update_by_query?conflicts=proceed
{
  "query":{
    "match_all":{}
  },
  "script": {
    "source": "ctx._source.expense_list = []",
    "lang": "painless"
  }
      
      }



POST /accounts/_update_by_query?conflicts=proceed
{
  "query":{
    
   "match_all":{}
    },
  "script":{
    "lang":"painless",
    
  "source":"""
 String val= "student_loan";
  if(ctx._source.age>=10 && ctx._source.age<=25){
    ctx._source.expense_list.add(val)
  }
 
  """
 }
}


POST /accounts/_update_by_query?conflicts=proceed
{
  "query":{
    "match_all":{}
  },
  
  "script":{
    "lang":"painless",
    
    "source":"""
    String val1="car_loan";
    String val2="house_loan";
    if(ctx._source.age>=25 && ctx._source.age<=50){
      ctx._source.expense_list.add(val1);
      ctx._source.expense_list.add(val2)
    }
    """
  }
}


POST /accounts/_update_by_query?conflicts=proceed
{
  "query":{
    "match_all":{}
  },
  
  "script":{
    "lang":"painless",
    
    "source":"""
    String val="recreation";
   
    if(ctx._source.balance>=40000){
      ctx._source.expense_list.add(val)
      
    }
    """
  }
}


POST /accounts/_update_by_query?conflicts=proceed
{
  "query":{
    "match_all":{}
  },
  "script":{
    "lang":"painless",
    "source":"""
    if(ctx._source.state=="PA"){
      ctx._source.balance-=params.val
    }
    """,
    "params":{
      "val":2000
    }
  }
}

#Question no 7


#Question no 8


#Question no 9

