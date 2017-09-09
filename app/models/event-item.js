import DS from 'ember-data';
import Model from 'ember-data/model';
import Ember from 'ember';

export default Model.extend({
  title: DS.attr('string'),
	slug: DS.attr('string')
});
