const links = [
    {
      label: "Week 1",
      url: "week1/week1.html"
    },
    {
      label: "Week 2",
      url: "week2/week2.html"
    },
    {
      label: "Week 3",
      url: "week3/week3.html"
    },
    {
      label: "Week 4",
      url: "week4/week4.html"
    },
    {
      label: "Week 5",
      url: "week5/week5.html"
    }
  ]
  
  let text = "";
  links.forEach(myFunction);
  
  function myFunction(item) {
    var li = document.createElement("li");
    var a = document.createElement("a")
    var label = document.createTextNode(item.label)
    li.appendChild(a);
    a.appendChild(label);
    a.title = label;
    a.href = item.url;
    document.getElementById("link_list").appendChild(li);
  }