import colorsArr from './dataset';

var Point = function (x, y, z, label) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.label = label;
}

Point.prototype = {
  dist: function(p) {
    var x = Math.abs(p.x - this.x);
    var y = Math.abs(p.y - this.y);
    var z = Math.abs(p.z - this.z);

    return Math.sqrt(x * x + y * y + z * z);
  }
};

function get_dataset(arr, callback)
{
  var data = [],
      arrLngth = arr.length;

   for (var i = 0; i < arr.length; ++i) {
     data.push(new Point(arr[i]["x"], arr[i]["y"], arr[i]["z"], arr[i]["label"]));
  }
   callback(data);
}


function rgb_from_hex(triplet) {
  triplet = triplet.replace("#", "");
  
  if (triplet.length == 3) // #rgb == #rrggbb
  {
    triplet = triplet[0] + triplet[0]
            + triplet[1] + triplet[1]
            + triplet[2] + triplet[2];
  }
  
  var value = parseInt(triplet, 16);
  var b = Math.floor(value % 256);
  var g = Math.floor((value / 256) % 256);
  var r = Math.floor((value / (256 * 256)) % 256);
  return new Point(r, g, b);
}

var ColorClassifier = function () {
  this.data = [];
};

ColorClassifier.prototype = {
    learn: function (data) {
      this.data = data;
    },
    classify: function (triplet) {
      var point = rgb_from_hex(triplet);
      var min = Infinity;
      var min_idx = -1;
      var i, dist;
      for (i = 0; i < this.data.length; ++i)
      {
        dist = point.dist(this.data[i]);
        if (dist < min)
        {
          min = dist;
          min_idx = i;
        }
      }
      this.last_result = min_idx;
      return this.data[min_idx].label;
    },
    get_closest_color_hex: function(triplet)
    {
      var p = this.data[this.last_result];
      var val = p.x * (256 * 256) + p.y * 256 + p.z;
      var str = val.toString(16);
      while (str.length < 6)
        str = "0" + str;
      return "#" + str;
    }
};

const colorClassifier = new ColorClassifier();
get_dataset(colorsArr, function(color){
  colorClassifier.learn(color);
})

export default colorClassifier;