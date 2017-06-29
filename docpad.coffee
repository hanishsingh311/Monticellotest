# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        
        site:
            # The production url of our website
            url: "http://localhost:9778"

            # The default title of our website
            title: "Your Website"

            # The website description (for SEO)
            description: """
                When your website appears in search results in say Google, the text here will be shown underneath your website's title.
                """

            # The website keywords (for SEO) separated by commas
            keywords: """
                place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website
                """

            # The website author's name
            author: "Your Name"

            # The website author's email
            email: "your@email.com"

        # Helper Functions

        # Get the prepared site/document title
        # Often we would like to specify particular formatting to our page's title
        # we can apply that formatting here
        getPreparedTitle: ->
            # if we have a document title, then we should use that and suffix the site's title onto it
            if @document.title
                "#{@document.title} | #{@site.title}"
            # if our document does not have it's own title, then we should just use the site's title
            else
                @site.title

        # Get the prepared site/document description
        getPreparedDescription: ->
            # if we have a document description, then we should use that, otherwise use the site's description
            @document.description or @site.description

        # Get the prepared site/document keywords
        getPreparedKeywords: ->
            # Merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or '').join(', ')

        contentTrim: (str) ->
            if str.length > 200 then str.slice(0, 197) + '...' else str


    # =================================
    # Collections
    # These are special collections that our website makes available to us

    collections:
	    pages: ->
            @getCollection("html").findAllLive({pageOrder: $exists: true},[pageOrder:1,title:1] )
			
        pages: ->
            @getCollection("html").findAllLive({isPage:true}).on "add", (model) ->
                model.setMetaDefaults({layout:"default"})



    # =================================

}

# Export the DocPad Configuration
module.exports = docpadConfig