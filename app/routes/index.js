import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    if (params.page_slug !== '') {
      console.log(params.page_slug);
      return this.get('store').createRecord('event-item', {
        title: "Open House Weekend",
        slug: "ohs"
      });
    }
  }

});
