var Entity, Vec3Float, r;

r = require('restructure');

Entity = require('../entity');

Vec3Float = require('../../types').Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  parentKitID: r.uint32le,
  effectID: r.uint32le,
  attachmentID: r.uint32le,
  offset: Vec3Float,
  yaw: r.floatle,
  pitch: r.floatle,
  roll: r.floatle
});