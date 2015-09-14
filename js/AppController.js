angular.module('PonyShop', ['ui-rangeSlider'])
  .controller('AppController', ['$scope', '$http', function ($scope, $http) {

    $scope.filterVisible = false;

    $scope.dictionary = {
      colors     : ['Фиолетовый', 'Розовый', 'Синий', 'Зеленый'],
      kinds      : ['Единорог', 'Земная пони', 'Пегас', 'Апикорн'],
      priceLimits: {
        min: 0,
        max: 200
      }
    };

    $scope.filterValues = {
      color   : null,
      kind    : null,
      priceMin: null,
      priceMax: null,
      is_new  : null
    };

    $scope.showFilters = function () {
      $scope.filterVisible = true;
    };

    $scope.hideFilters = function () {
      $scope.filterVisible = false;
    };

    $scope.selectPonies = function(item) {
      return (
        (item.color === ($scope.filterValues.color || item.color)) &&
        (item.kind === ($scope.filterValues.kind || item.kind)) &&
        (item.price >= $scope.filterValues.priceMin) &&
        (item.price <= $scope.filterValues.priceMax) &&
        (item.is_new === ($scope.filterValues.is_new === null ? item.is_new : $scope.filterValues.is_new))
      );
    };

    $http.get('#')
      .success(function (data, status, headers, config) {
        $scope.ponyData = [
          {
            "name"  : "Твайлайт",
            "color" : "Фиолетовый",
            "kind"  : "Единорог",
            "price" : 19.99,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 1",
            "color" : "Розовый",
            "kind"  : "Земная пони",
            "price" : 10.54,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 2",
            "color" : "Синий",
            "kind"  : "Пегас",
            "price" : 3.21,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 3",
            "color" : "Синий",
            "kind"  : "Пегас",
            "price" : 5.89,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 4",
            "color" : "Зеленый",
            "kind"  : "Пегас",
            "price" : 15.95,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 5",
            "color" : "Розовый",
            "kind"  : "Земная пони",
            "price" : 12.05,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 6",
            "color" : "Розовый",
            "kind"  : "Апикорн",
            "price" : 1.15,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 7",
            "color" : "Розовый",
            "kind"  : "Апикорн",
            "price" : 99.50,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 8",
            "color" : "Розовый",
            "kind"  : "Земная пони",
            "price" : 43.23,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 9",
            "color" : "Зеленый",
            "kind"  : "Апикорн",
            "price" : 23.65,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 10",
            "color" : "Синий",
            "kind"  : "Земная пони",
            "price" : 64.29,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 11",
            "color" : "Зеленый",
            "kind"  : "Земная пони",
            "price" : 67.30,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 12",
            "color" : "Зеленый",
            "kind"  : "Пегас",
            "price" : 54.78,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 13",
            "color" : "Розовый",
            "kind"  : "Пегас",
            "price" : 13.34,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 14",
            "color" : "Синий",
            "kind"  : "Земная пони",
            "price" : 12.10,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 15",
            "color" : "Розовый",
            "kind"  : "Пегас",
            "price" : 12.10,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 16",
            "color" : "Розовый",
            "kind"  : "Пегас",
            "price" : 12.10,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 17",
            "color" : "Синий",
            "kind"  : "Земная пони",
            "price" : 87.90,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 18",
            "color" : "Розовый",
            "kind"  : "Апикорн",
            "price" : 9.99,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 19",
            "color" : "Розовый",
            "kind"  : "Земная пони",
            "price" : 9.99,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 20",
            "color" : "Зеленый",
            "kind"  : "Апикорн",
            "price" : 9.99,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 21",
            "color" : "Зеленый",
            "kind"  : "Апикорн",
            "price" : 11.11,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 22",
            "color" : "Розовый",
            "kind"  : "Апикорн",
            "price" : 199.90,
            "is_new": true
          },
          {
            "name"  : "Тестовый пони 23",
            "color" : "Розовый",
            "kind"  : "Земная пони",
            "price" : 17.80,
            "is_new": false
          },
          {
            "name"  : "Тестовый пони 24",
            "color" : "Синий",
            "kind"  : "Апикорн",
            "price" : 17.80,
            "is_new": true
          }
        ];
      });

  }]);