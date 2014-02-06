pathUtil = require 'path'
_ = require 'underscore'

Week = require './Week'
{asMoment,onlyInList} = require './Utils'
{fileNameRegexpPattern,schoolLevels} = require('./Config').current()

class MenuFileName
  constructor: (filename)->
    throw "filename required" unless filename?
    basename = pathUtil.basename filename
    unless parameters = basename.match(fileNameRegexpPattern)
      throw "#{basename} invalid basename : must respect #{fileNameRegexpPattern}"
    [@basename,year,month,day,tags] = parameters
    @menuDate = asMoment("#{year}/#{month}/#{day}","YYYY/MM/DD")
    @week = new Week(@menuDate)
    @tags = if tags then tags.split('-') else []
    @schoolLevels = _.filter @tags, onlyInList(schoolLevels)
    @extension= pathUtil.extname(filename)

  toJSON: ->
    basename: @basename
    extension: @extension
    tags: @tags
    schoolLevels: @schoolLevels
    menuDate: @menuDate.toJSON()
    week: @week.toJSON()
    year: @week.from.year()
    month: @week.from.month()+1

module.exports = MenuFileName
