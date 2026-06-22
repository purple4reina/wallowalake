# Local-build compatibility shim for modern Ruby (3.2+ / 4.0).
#
# The pinned github-pages stack (jekyll 3.9 / liquid 4.0.3) still calls the
# object "taint" API (`tainted?`, `taint`, `untaint`) and a few other methods
# that Ruby removed in 3.2+. Without them, `jekyll build`/`serve` crashes
# locally (e.g. "undefined method 'tainted?' for an instance of String").
#
# This is loaded from the Gemfile (`require_relative`) so it applies at the
# Ruby-process level BEFORE jekyll/liquid load. That matters because the
# github-pages gem runs Jekyll in safe mode even locally, which disables
# custom _plugins/ — so a normal Jekyll plugin would never run.
#
# It does not affect the deployed site: GitHub Pages builds on its own
# servers, and the `_compat/` directory is not published. The guards make
# every patch a no-op on older Rubies that still define these methods.

unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def taint
      self
    end

    def untaint
      self
    end
  end
end

unless File.respond_to?(:exists?)
  def File.exists?(path)
    File.exist?(path)
  end
end

unless Dir.respond_to?(:exists?)
  def Dir.exists?(path)
    Dir.exist?(path)
  end
end
