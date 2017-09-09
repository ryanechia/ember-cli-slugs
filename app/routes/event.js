import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      if (params.index_slug !== '') {
      return this.store.findAll('event-item').then(function(objs) {
        return objs.get("firstObject");
      });
    } else {
      return this.store.findRecord('event-item', params.page_slug).then(function(obj) {
        return obj;
      });
    }
	},
	// allows us to use slug as the url
	serialize: function(model, params) {
		return { index_slug: model.get('slug')};
	}
});
