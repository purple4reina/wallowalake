source "https://rubygems.org"

# Apply the Ruby 3.2+/4.0 compatibility shim before anything loads. The
# github-pages stack runs Jekyll in safe mode (no custom _plugins/), so this
# must be injected at the process level via the Gemfile. No-op on older Ruby.
require_relative "_compat/ruby34_compat"

gem "github-pages", group: :jekyll_plugins

# Gems removed from Ruby's default set in 3.4+/4.0 that the pinned
# jekyll 3.9 (via github-pages) still requires at runtime.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
