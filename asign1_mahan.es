PUT hiking
{
    "settings" : {
        "index" : {
            "number_of_shards" : 3, 
            "number_of_replicas" : 2 
        }
    }
}

PUT hiking/_doc/1
{
  "hiked_on": "2019/01/26",
  "coordinator": "Mahan Adhikari"
  ,"total_student": "12",
  "cost": "3456.67",
  "bus_booked": "true/false"
  ,"checklist": "[“a”,”b”]"
  ,"testfield": "Yahoo"
}

GET hiking/_doc/1/_source

GET hiking/_doc/1?_source=false

GET  hiking/_doc/1?_source_include=hiked_on,coordinator

GET hiking/_doc/1?_source_exclude=coordinator

POST hiking/_doc/1/_update
{"doc":{"objective_of_hike":"nature"}}

POST hiking/_doc/1/_update
{
  "script": {
    "lang":"painless",
    "source":"ctx._source.new_field2='new_value2'"
  }
}

POST hiking/_doc/1/_update
{
  "script": {
    "lang":"painless",
    "source":"ctx._source.remove('objective_of_hike')"
  }
}

POST hiking/_doc/1/_update
{
  "script": {
        "lang": "painless",
        "source": "ctx._source.total_student +=params.total_student",
        "params": {
          "total_student": 2
        }
      }
}

POST hiking/_doc/1/_update
{
  "script":{
    "lang":"painless",
    "source":"""
      for (int i=0; i<20; i++){
        String val='test_total_student'+i;
        ctx._source.total_student.add(val)
      }"""
  }
}




